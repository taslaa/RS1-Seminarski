import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Observable, Subscriber} from "rxjs";
import {Valuta} from "../../servisi/valuta.service";
import {Prodavnica, ProdavnicaService} from "../../servisi/prodavnica.service";
import {KategorijaService} from "../../servisi/kategorija.service";
import {HttpParams} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-dodaj-sliku',
  templateUrl: './dodaj-sliku.component.html',
  styleUrls: ['./dodaj-sliku.component.css']
})
export class DodajSlikuComponent implements OnInit {

  prodavnica!:Prodavnica[];


  profileForm = this.formBuilder.group({
    opis:['' , [Validators.minLength(3),Validators.required]],
    prodavnica:['' , Validators.required],
  })

  constructor(private dialog:MatDialogRef<DodajSlikuComponent>, @Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:UntypedFormBuilder,  private jwtHelper: JwtHelperService,
              private servisProdavnice : ProdavnicaService) { }

  ngOnInit(): void {
    this.servisProdavnice.Get(new HttpParams()).subscribe(x=> {
      this.prodavnica = x;
    })
  }

  Save() {
    if(this.profileForm.valid)
    {
      this.dialog.close(this.data);
    }
    else {
      alert("Niste popunili sva obavezna polja");
    }
  }

  onSelectedNewFile($event:Event) {
    const file:any = ($event.target as HTMLInputElement)?.files?.[0];
    console.log(file);
    this.convertToBase64(file);
  }

  convertToBase64(file:File){
    const observable = new Observable((subscriber:Subscriber<any>)=> {
      this.readFile(file,subscriber);
    })
    observable.subscribe((d) => {
      this.data.slikaSlika = d;
    })
  }

  readFile(file:File,subscriber:Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload= () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    }

    filereader.onerror= (error) => {
      subscriber.error(error);
    }

  }

  public GetUserName = (): string => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname']
    return name;
  }

  public GetUserId = (): string => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const id = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    return id;
  }
}
