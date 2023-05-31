import {Component, Inject, OnInit} from '@angular/core';
import {Drzava, DrzavaService} from "../../servisi/drzava.service";
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-dmodal',
  templateUrl: './dmodal.component.html',
  styleUrls: ['./dmodal.component.css']
})
export class DmodalComponent implements OnInit {

  drzave!:Drzava[];

  profileForm = this.formBuilder.group({
    naziv:['' , [Validators.minLength(3),Validators.required]],
    telefon:['' , [Validators.required]],
    drzava:['' , [Validators.required]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:UntypedFormBuilder,
              private dialog:MatDialogRef<DmodalComponent>, private serviceDrzava:DrzavaService) { }

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
