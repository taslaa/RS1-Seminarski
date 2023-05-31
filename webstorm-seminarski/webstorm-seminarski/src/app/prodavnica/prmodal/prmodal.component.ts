import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProdavnicaService} from "../../servisi/prodavnica.service";
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-prmodal',
  templateUrl: './prmodal.component.html',
  styleUrls: ['./prmodal.component.css']
})
export class PrmodalComponent implements OnInit {

  profileForm = this.formBuilder.group({
    naziv:['' , [Validators.minLength(3),Validators.required]],
    adresa:['' , [Validators.required]],
    telefon:['' , [Validators.required]],
    slika:['']
  })

  constructor(private dialog:MatDialogRef<PrmodalComponent>, private service:ProdavnicaService,
              @Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:UntypedFormBuilder) { }

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
