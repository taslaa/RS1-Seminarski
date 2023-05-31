import {Component, OnInit, ViewChild} from '@angular/core';
import {Dostavljac, DostavljacService} from "../servisi/dostavljac.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Dobavljac, DobavljacService} from "../servisi/dobavljac.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {Proizvod} from "../servisi/proizvod.service";
import {DmodalComponent} from "../dostavljac/dmodal/dmodal.component";
import {DodajmodalComponent} from "./dodajmodal/dodajmodal.component";

@Component({
  selector: 'app-dobavljac',
  templateUrl: './dobavljac.component.html',
  styleUrls: ['./dobavljac.component.css']
})
export class DobavljacComponent implements OnInit {

  filter:string='';
  dodajDobavljaca : Dobavljac = <Dobavljac>{};
  displayedColumns:string[] = ['nazivDobavljaca', 'brojDobavljaca','drzava', 'akcija'];
  dataSource = new MatTableDataSource<Dobavljac>();
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(){
    let x ;
    this.servisDobavljac.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }

  constructor(httpKlijent:HttpClient, private servisDobavljac : DobavljacService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.servisDobavljac.Get(new HttpParams()).subscribe(x=> {
      this.dataSource.data = x;
    })
  }

  Filtriraj(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  UcitajPodatke(){
    this.servisDobavljac.Get(new HttpParams()).subscribe(x=> {
      this.dataSource.data = x;
    })
  }

  ObrisiDobavljaca(x: Dobavljac) {
    this.servisDobavljac.Delete(x.id).subscribe(() => {
      alert("Uspjesno brisanje");
      this.UcitajPodatke();
    })
  }

  Uredi(x: Dobavljac) {
    let dialogRef = this.dialog.open(DodajmodalComponent, {data:x,  width:'30%',height:'50%'})

    dialogRef.afterClosed().subscribe(x => {
      this.servisDobavljac.Update(x.id , x).subscribe( () =>{
        alert("Uspjesno editovanje dobavljaca");
        this.UcitajPodatke();
      })
    })
  }

  Novi(){
    let dialogRef = this.dialog.open(DodajmodalComponent, {data:this.dodajDobavljaca,  width:'30%',height:'50%'})

    dialogRef.afterClosed().subscribe(x => {
      this.Dodaj(x);
    })
  }

  Dodaj(x: Dobavljac) {
    this.servisDobavljac.Add(x).subscribe(() => {
      alert("Uspjesno dodavanje dobavljaca");
      this.UcitajPodatke();
      this.dodajDobavljaca = <Dobavljac>{};
    })
  }
}
