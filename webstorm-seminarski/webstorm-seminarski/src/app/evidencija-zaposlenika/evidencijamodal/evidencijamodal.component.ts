import {Component, Inject, OnInit} from '@angular/core';
import {Drzava, DrzavaService} from "../../servisi/drzava.service";
import {Spol, SpolService} from "../../servisi/spol.service";
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {Korisnik, KorisnikService} from "../../servisi/korisnik.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpParams} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-evidencijamodal',
  templateUrl: './evidencijamodal.component.html',
  styleUrls: ['./evidencijamodal.component.css']
})
export class EvidencijamodalComponent implements OnInit {

  korisnici!:Korisnik[];


  profileForm = this.formBuilder.group({
    korisnik:['' , [Validators.minLength(3),Validators.required]],
    datumAktivnosti:['' , [Validators.minLength(3),Validators.required]],
    aktivan:['' , [Validators.minLength(3),Validators.required]]
  })

  constructor(private dialog:MatDialogRef<EvidencijamodalComponent>,@Inject(MAT_DIALOG_DATA) public data:any ,
              private formBuilder:UntypedFormBuilder,
              public servis:KorisnikService, private jwtHelper : JwtHelperService) { }

  ngOnInit(): void {
    this.servis.Get(new HttpParams()).subscribe(x => {
      this.korisnici = x;
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
