import {Component, Inject, OnInit} from '@angular/core';
import {Drzava, DrzavaService} from "../../servisi/drzava.service";
import {Spol, SpolService} from "../../servisi/spol.service";
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {KorisnikService} from "../../servisi/korisnik.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-zmodal',
  templateUrl: './zmodal.component.html',
  styleUrls: ['./zmodal.component.css']
})
export class ZmodalComponent implements OnInit {

  drzave!:Drzava[];
  spolovi!:Spol[];

  profileForm = this.formBuilder.group({
    ime:['' , [Validators.minLength(3),Validators.required]],
    prezime:['' , [Validators.minLength(3),Validators.required]],
    datumRodjenja:['' , [Validators.required]],
    grad:['' , [Validators.minLength(3),Validators.required]],
    brojTelefona:['' , [Validators.minLength(6),Validators.required]],
    adresa:['' , [Validators.minLength(5),Validators.required]],
    drzava:['' , [Validators.minLength(1),Validators.required]],
    spol:['' , [Validators.minLength(1),Validators.required]],
    email:['' , [Validators.minLength(1),Validators.required]],
    lozinka:['' , [Validators.minLength(1),Validators.required]],

  })

  constructor(private dialog:MatDialogRef<ZmodalComponent>,@Inject(MAT_DIALOG_DATA) public data:any ,
              private formBuilder:UntypedFormBuilder,
              private serviceSpol:SpolService, private serviceDrzava:DrzavaService) { }

  ngOnInit(): void {
    this.serviceSpol.Get(new HttpParams()).subscribe(x => {
      this.spolovi = x;
    })

    this.serviceDrzava.Get(new HttpParams()).subscribe(x => {
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
}
