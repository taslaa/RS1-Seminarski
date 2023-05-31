import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ProizvodiSearchObject} from "../proizvodi-pregled/proizvodi-pregled.component";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {Proizvod} from "../servisi/proizvod.service";
import {Prodavnica, ProdavnicaService} from "../servisi/prodavnica.service";
import {HttpParams} from "@angular/common/http";

interface Sort{
  value:string,
  viewValue:string
}

export interface ProdavnicaSearchObject{
  Naziv:string,
  ComboBoxSearch:string
}

@Component({
  selector: 'app-prodavnica-pregled',
  templateUrl: './prodavnica-pregled.component.html',
  styleUrls: ['./prodavnica-pregled.component.css']
})
export class ProdavnicaPregledComponent implements OnInit {

  search:ProdavnicaSearchObject = <ProdavnicaSearchObject>{};

  listSort:Sort[] = [
    {value: 'Abeceda' , viewValue: 'A-Z'},
    {value: 'AbecedaUnazad' , viewValue: 'Z-A'},
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Prodavnica> = new MatTableDataSource<Prodavnica>();

  constructor(private changeDetectorRef: ChangeDetectorRef, private service:ProdavnicaService) { }

  ngOnInit(): void {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  Filtriraj()
  {
    let params = new HttpParams();
    if(this.search.Naziv != undefined)
    {
      params = params.append('Naziv' , this.search.Naziv);
    }
    if(this.search.ComboBoxSearch != undefined)
    {
      params = params.append('ComboBoxSearch' , this.search.ComboBoxSearch);
    }
    this.service.Get(params).subscribe(x => {
      this.dataSource.data = x;
    })
  }
}
