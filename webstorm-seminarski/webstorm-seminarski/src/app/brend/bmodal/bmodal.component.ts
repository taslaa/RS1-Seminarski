import {Component, Inject, OnInit} from '@angular/core';
import {Valuta} from "../../servisi/valuta.service";
import {Drzava, DrzavaService} from "../../servisi/drzava.service";
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProdavnicaService} from "../../servisi/prodavnica.service";
import {BrendComponent} from "../brend.component";
import {HttpParams} from "@angular/common/http";
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-bmodal',
  templateUrl: './bmodal.component.html',
  styleUrls: ['./bmodal.component.css']
})
export class BmodalComponent implements OnInit {

  drzave!:Drzava[];

  profileForm = this.formBuilder.group({
    nazivBrenda:['' , [Validators.minLength(3),Validators.required]],
    luxury:['' , [Validators.required]],
    drzava:['' , Validators.required],
  })

  constructor(private dialog:MatDialogRef<BrendComponent>, @Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:UntypedFormBuilder,
              private servsiDrzava : DrzavaService) { }

  ngOnInit(): void {
    this.servsiDrzava.Get(new HttpParams()).subscribe(x=> {
      this.drzave = x;
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
      this.data.slika = d;
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
}
