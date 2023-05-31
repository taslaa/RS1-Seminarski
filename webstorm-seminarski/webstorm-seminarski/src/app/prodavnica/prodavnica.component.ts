import {Component, OnInit, ViewChild} from '@angular/core';
import {Proizvod, ProizvodService} from "../servisi/proizvod.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Prodavnica, ProdavnicaService} from "../servisi/prodavnica.service";
import {MatDialog} from "@angular/material/dialog";
import {PmodalComponent} from "../proizvodi/pmodal/pmodal.component";
import {PrmodalComponent} from "./prmodal/prmodal.component";
import {ChartConfiguration, ChartType} from "chart.js";

@Component({
  selector: 'app-prodavnica',
  templateUrl: './prodavnica.component.html',
  styleUrls: ['./prodavnica.component.css']
})
export class ProdavnicaComponent implements OnInit {

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

  filter:string= '';
  dodajProdavnicu:Prodavnica = <Prodavnica>{};
  displayedColumns: string[] = ['naziv','adresa', 'telefon','akcija', 'slika'];
  dataSource = new MatTableDataSource<Prodavnica>();
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(){
    let x ;
    this.service.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }

  constructor(private httpKlijent:HttpClient, private service : ProdavnicaService,private dialog:MatDialog) { }

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

  ObrisiProizvod(x: Prodavnica) {
    this.service.Delete(x.id).subscribe(() => {
      alert("Uspjesno brisanje");
      this.UcitajPodatke();
    })
  }

  Uredi(x: Prodavnica) {
    let dialogRef = this.dialog.open(PrmodalComponent, {data:x,  width:'30%',height:'70%'})

    dialogRef.afterClosed().subscribe(x => {
      this.service.Update(x.id , x).subscribe( () =>{
        alert("Uspjesno editovanje prodavnice");
        this.UcitajPodatke();
      })
    })
  }

  Novi(){
    let dialogRef = this.dialog.open(PrmodalComponent, {data:this.dodajProdavnicu,  width:'30%',height:'70%'})

    dialogRef.afterClosed().subscribe(x => {
      this.Dodaj(x);
    })
  }

  Dodaj(x: Prodavnica) {
    this.service.Add(x).subscribe(() => {
      alert("Uspjesno dodavanje prodavnice");
      this.UcitajPodatke();
      this.dodajProdavnicu = <Prodavnica>{};
    })
  }
}
