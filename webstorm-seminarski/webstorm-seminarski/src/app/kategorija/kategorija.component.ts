import {Component, OnInit, ViewChild} from '@angular/core';
import {Dostavljac, DostavljacService} from "../servisi/dostavljac.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Kategorija, KategorijaService} from "../servisi/kategorija.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {Proizvod} from "../servisi/proizvod.service";
import {DmodalComponent} from "../dostavljac/dmodal/dmodal.component";
import {KmodalComponent} from "./kmodal/kmodal.component";

@Component({
  selector: 'app-kategorija',
  templateUrl: './kategorija.component.html',
  styleUrls: ['./kategorija.component.css']
})
export class KategorijaComponent implements OnInit {

  filter:string='';
  dodajKategoriju : Kategorija = <Kategorija>{};
  displayedColumns:string[] = ['nazivKategorije', 'materijal','kvalitet','akcija'];
  dataSource = new MatTableDataSource<Kategorija>();
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(){
    let x ;
    this.servisKategorija.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }

  constructor(httpKlijent:HttpClient, private servisKategorija : KategorijaService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.servisKategorija.Get(new HttpParams()).subscribe(x=> {
      this.dataSource.data = x;
    })
  }

  Filtriraj(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  UcitajPodatke(){
    this.servisKategorija.Get(new HttpParams()).subscribe(x=> {
      this.dataSource.data = x;
    })
  }

  ObrisiKategoriju(x: Kategorija) {
    this.servisKategorija.Delete(x.id).subscribe(() => {
      alert("Uspjesno brisanje");
      this.UcitajPodatke();
    })
  }

  Uredi(x: Kategorija) {
    let dialogRef = this.dialog.open(KmodalComponent, {data:x,  width:'30%',height:'50%'})

    dialogRef.afterClosed().subscribe(x => {
      this.servisKategorija.Update(x.id , x).subscribe( () =>{
        alert("Uspjesno editovanje kategorija");
        this.UcitajPodatke();
      })
    })
  }

  Novi(){
    let dialogRef = this.dialog.open(KmodalComponent, {data:this.dodajKategoriju,  width:'30%',height:'50%'})

    dialogRef.afterClosed().subscribe(x => {
      this.Dodaj(x);
    })
  }

  Dodaj(x: Kategorija) {
    this.servisKategorija.Add(x).subscribe(() => {
      alert("Uspjesno dodavanje dostavljaca");
      this.UcitajPodatke();
      this.dodajKategoriju = <Kategorija>{};
    })
  }
}
