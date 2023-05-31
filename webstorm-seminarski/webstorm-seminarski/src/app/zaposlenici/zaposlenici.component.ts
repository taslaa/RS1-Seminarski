import {Component, OnInit, ViewChild} from '@angular/core';
import {Korisnik, KorisnikService} from "../servisi/korisnik.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Proizvod, ProizvodService} from "../servisi/proizvod.service";
import {MatDialog} from "@angular/material/dialog";
import {PmodalComponent} from "../proizvodi/pmodal/pmodal.component";
import {ZmodalComponent} from "./zmodal/zmodal.component";

@Component({
  selector: 'app-zaposlenici',
  templateUrl: './zaposlenici.component.html',
  styleUrls: ['./zaposlenici.component.css']
})
export class ZaposleniciComponent implements OnInit {

  filterIme='';
  dodajZaposlenika:Korisnik = <Korisnik>{};
  displayedColumns: string[] = ['ime', 'prezime', 'datumRodjenja', 'grad', 'brojTelefona', 'adresa', 'drzava', 'spol','akcija'];
  dataSource = new MatTableDataSource<Korisnik>();
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(){
    let x ;
    this.service.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }

  constructor(private httpKlijent:HttpClient, private service : KorisnikService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
  }

  Filtriraj(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  UcitajPodatke() {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
  }

  ObrisiZaposlenika(x: Korisnik) {
    this.service.DeleteString(x.id).subscribe(() => {
      alert("Uspjesno brisanje");
      this.UcitajPodatke();
    })
  }

  Uredi(x: Korisnik) {
    let dialogRef = this.dialog.open(ZmodalComponent, {data:x,  width:'30%',height:'80%'})

    dialogRef.afterClosed().subscribe(x => {
      this.service.Update(x.id , x).subscribe( () =>{
        alert("Uspjesno editovanje zaposlenika");
        this.UcitajPodatke();
      })
    })
  }

  Novi(){
    let dialogRef = this.dialog.open(ZmodalComponent, {data:this.dodajZaposlenika,  width:'30%',height:'80%'})

    dialogRef.afterClosed().subscribe(x => {
      this.Dodaj(x);
    })
  }

  Dodaj(x: Korisnik) {
    this.service.dodajZaposlenika(x).subscribe(() => {
      alert("Uspjesno dodavanje zaposlenika");
      this.UcitajPodatke();
      this.dodajZaposlenika = <Korisnik>{};
    })
  }
}
