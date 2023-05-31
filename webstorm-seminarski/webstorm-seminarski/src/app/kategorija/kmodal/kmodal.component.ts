import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DrzavaService} from "../../servisi/drzava.service";
import {KategorijaComponent} from "../kategorija.component";

@Component({
  selector: 'app-kmodal',
  templateUrl: './kmodal.component.html',
  styleUrls: ['./kmodal.component.css']
})
export class KmodalComponent implements OnInit {

  profileForm = this.formBuilder.group({
    nazivKategorije:['' , [Validators.minLength(3),Validators.required]],
    materijal:['' , [Validators.required]],
    kvalitet:['' , [Validators.required]]
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:UntypedFormBuilder,
              private dialog:MatDialogRef<KategorijaComponent>) { }

  ngOnInit(): void {

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
