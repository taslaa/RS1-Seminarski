import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../servisi/api.service";
import {KorisnikService} from "../servisi/korisnik.service";
import {Korisnik} from "../servisi/korisnik.service";
import {FormControl, FormGroup, Validators, UntypedFormBuilder, FormBuilder} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Drzava, DrzavaService} from "../servisi/drzava.service";
import {Spol, SpolService} from "../servisi/spol.service";



@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

spolovi:Spol[];
drzave:Drzava[];

  constructor(private httpKlijent : HttpClient, private service : KorisnikService, private servisSpol : SpolService,
              private servisDrzava : DrzavaService, private formBuilder:FormBuilder, private dialogRef : MatDialogRef<any>) { }

  dodajKorisnika:Korisnik = <Korisnik>{};

  profileForm = this.formBuilder.group({
    ime:['' , [Validators.minLength(3),Validators.required]],
    prezime:['' , [Validators.minLength(3),Validators.required]],
    datumRodjenja:['' , [Validators.required]],
    grad:['' , [Validators.minLength(3),Validators.required]],
    brojTelefona:['' , [Validators.minLength(6),Validators.required]],
    adresa:['' , [Validators.minLength(5),Validators.required]],
    drzavaId:['' , [Validators.minLength(1),Validators.required]],
    spolId:['' , [Validators.minLength(1),Validators.required]],
    email:['' , [Validators.minLength(3),Validators.required]],
    lozinka:['' , [Validators.minLength(3),Validators.required]],
  })

  ngOnInit(): void {
    this.servisSpol.Get(new HttpParams()).subscribe(x => {
      this.spolovi = x;
    }),
      this.servisDrzava.Get(new HttpParams()).subscribe(x => {
        this.drzave = x;
      })
  }

  Dodaj(x:Korisnik) {
    this.service.Registracija(x).subscribe(() => {
      this.dodajKorisnika = <Korisnik>{};
      alert("Uspjesno dodavanje zaposlenika");
      this.dialogRef.close(RegistracijaComponent);
    })
  }

  zatvoriDialog(){
    this.dialogRef.close(RegistracijaComponent);
  }
}
