import {Component, OnInit, ViewChild} from '@angular/core';
import {Proizvod, ProizvodService} from "../servisi/proizvod.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PmodalComponent} from "./pmodal/pmodal.component";
import {SignalrService} from "../servisi/signalr.service";
import {ChartConfiguration, ChartType} from "chart.js";

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent implements OnInit {

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
  dodajProizvod:Proizvod = <Proizvod>{};
  displayedColumns: string[] = ['nazivProizvoda','valuta', 'cijena', 'serijskiBroj','slika','kategorija', 'dobavljac', 'brend', 'akcija'];
  dataSource = new MatTableDataSource<Proizvod>();
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(){
    let x ;
    this.service.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }

  constructor(private httpKlijent:HttpClient, private service : ProizvodService,private dialog:MatDialog) { }

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

  ObrisiProizvod(x: Proizvod) {
    this.service.Delete(x.id).subscribe(() => {
      alert("Uspjesno brisanje");
      this.UcitajPodatke();
    })
  }

  Uredi(x: Proizvod) {
    let dialogRef = this.dialog.open(PmodalComponent, {data:x,  width:'30%',height:'70%'})

    dialogRef.afterClosed().subscribe(x => {
      this.service.Update(x.id , x).subscribe( () =>{
        alert("Uspjesno editovanje proizvoda");
        this.UcitajPodatke();
      })
    })
  }

  Novi(){
    let dialogRef = this.dialog.open(PmodalComponent, {data:this.dodajProizvod,  width:'30%',height:'70%'})

    dialogRef.afterClosed().subscribe(x => {
      this.Dodaj(x);
    })
  }

  Dodaj(x: Proizvod) {
    this.service.Add(x).subscribe(() => {
      alert("Uspjesno dodavanje proizvoda");
      this.UcitajPodatke();
      this.dodajProizvod = <Proizvod>{};
    })
  }
}
