import {Component, OnInit, ViewChild} from '@angular/core';
import {Dostavljac, DostavljacService} from "../servisi/dostavljac.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient, HttpParams} from "@angular/common/http";
import {DrzavaService} from "../servisi/drzava.service";
import {MatDialog} from "@angular/material/dialog";
import {Proizvod} from "../servisi/proizvod.service";
import {PmodalComponent} from "../proizvodi/pmodal/pmodal.component";
import {DmodalComponent} from "./dmodal/dmodal.component";
import {ChartConfiguration, ChartType} from "chart.js";

@Component({
  selector: 'app-dostavljac',
  templateUrl: './dostavljac.component.html',
  styleUrls: ['./dostavljac.component.css']
})
export class DostavljacComponent implements OnInit {

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        min: 0
      }
    }
  };
  chartLabels: string[] = ['Real time data for the chart'];
  chartType: ChartType = 'bar';
  chartLegend: boolean = true;

  filter:string='';
  dodajDostavljaca : Dostavljac = <Dostavljac>{};
  displayedColumns:string[] = ['naziv', 'drzava','telefon','akcija'];
  dataSource = new MatTableDataSource<Dostavljac>();
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(){
    let x ;
    this.serviceDostavljac.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }

  constructor(httpKlijent:HttpClient, private serviceDostavljac : DostavljacService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.serviceDostavljac.Get(new HttpParams()).subscribe(x=> {
      this.dataSource.data = x;
    })
  }

  Filtriraj(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  UcitajPodatke(){
    this.serviceDostavljac.Get(new HttpParams()).subscribe(x=> {
      this.dataSource.data = x;
    })
  }

  ObrisiProizvod(x: Proizvod) {
    this.serviceDostavljac.Delete(x.id).subscribe(() => {
      alert("Uspjesno brisanje");
      this.UcitajPodatke();
    })
  }

  Uredi(x: Dostavljac) {
    let dialogRef = this.dialog.open(DmodalComponent, {data:x,  width:'30%',height:'50%'})

    dialogRef.afterClosed().subscribe(x => {
      this.serviceDostavljac.Update(x.id , x).subscribe( () =>{
        alert("Uspjesno editovanje dostavljaca");
        this.UcitajPodatke();
      })
    })
  }

  Novi(){
    let dialogRef = this.dialog.open(DmodalComponent, {data:this.dodajDostavljaca,  width:'30%',height:'50%'})

    dialogRef.afterClosed().subscribe(x => {
      this.Dodaj(x);
    })
  }

  Dodaj(x: Dostavljac) {
    this.serviceDostavljac.Add(x).subscribe(() => {
      alert("Uspjesno dodavanje dostavljaca");
      this.UcitajPodatke();
      this.dodajDostavljaca = <Dostavljac>{};
    })
  }
}
