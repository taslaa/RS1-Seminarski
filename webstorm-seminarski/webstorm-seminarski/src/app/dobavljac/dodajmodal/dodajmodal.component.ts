import {Component, Inject, OnInit} from '@angular/core';
import {Drzava, DrzavaService} from "../../servisi/drzava.service";
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-dodajmodal',
  templateUrl: './dodajmodal.component.html',
  styleUrls: ['./dodajmodal.component.css']
})
export class DodajmodalComponent implements OnInit {

  drzave!:Drzava[];

  profileForm = this.formBuilder.group({
    nazivDobavljaca:['' , [Validators.minLength(3),Validators.required]],
    brojDobavljaca:['' , [Validators.required]],
    drzava:['' , [Validators.required]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:UntypedFormBuilder,
              private dialog:MatDialogRef<DodajmodalComponent>, private serviceDrzava:DrzavaService) { }

  ngOnInit(): void {
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
