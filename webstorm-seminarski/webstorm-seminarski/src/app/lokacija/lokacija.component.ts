import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscriber} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Proizvod} from "../servisi/proizvod.service";
import {Slika, SlikaService} from "../servisi/slika.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {HttpParams} from "@angular/common/http";
import {PmodalComponent} from "../proizvodi/pmodal/pmodal.component";
import {DodajSlikuComponent} from "./dodaj-sliku/dodaj-sliku.component";
import {Korisnik} from "../servisi/korisnik.service";
import {Dobavljac} from "../servisi/dobavljac.service";
import {Prodavnica, ProdavnicaService} from "../servisi/prodavnica.service";
import {JwtHelperService} from "@auth0/angular-jwt";



@Component({
  selector: 'app-lokacija',
  templateUrl: './lokacija.component.html',
  styleUrls: ['./lokacija.component.css']
})
export class LokacijaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Slika> = new MatTableDataSource<Slika>();
  slike:Slika[];
  dodajSliku:Slika = <Slika>{};
  listProdavnica:Prodavnica[] = [];


  constructor(private slikaServis : SlikaService,private ruter : Router,private dialog:MatDialog, private changeDetectorRef: ChangeDetectorRef,private jwtHelper : JwtHelperService,
              private prodavnicaServis : ProdavnicaService) { }

  ngOnInit(): void {
    this.slikaServis.Get(new HttpParams()).subscribe(x=> {
      this.dataSource.data = x;
    });
    this.prodavnicaServis.Get(new HttpParams()).subscribe(x=> {
      this.listProdavnica = x;
    });
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  UcitajPodatke(){
    this.slikaServis.Get(new HttpParams()).subscribe(x=> {
      this.dataSource.data = x;
    });
  }

  Novi(){
    let dialogRef = this.dialog.open(DodajSlikuComponent, {data:this.dodajSliku,  width:'30%',height:'70%'})

    dialogRef.afterClosed().subscribe(x => {
      this.Dodaj(x);
    })
  }

  Dodaj(x: Slika) {
    this.slikaServis.Add(x).subscribe(() => {
      alert("Uspjesno dodavanje slike");
      this.UcitajPodatke();
      this.dodajSliku = <Slika>{};
    })
  }



}
