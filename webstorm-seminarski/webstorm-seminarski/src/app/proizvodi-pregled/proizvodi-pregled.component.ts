import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Dobavljac, DobavljacService} from "../servisi/dobavljac.service";
import {Kategorija, KategorijaService} from "../servisi/kategorija.service";
import {Brend, BrendService} from "../servisi/brend.service";
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {Proizvod, ProizvodService} from '../servisi/proizvod.service';
import {HttpParams} from "@angular/common/http";
import {Token} from "../servisi/korisnik.service";
import {loadCompilerCliMigrationsModule} from "@angular/core/schematics/utils/load_esm";
import {PmodalComponent} from "../proizvodi/pmodal/pmodal.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CartService} from "../cart.service";
import {ProductDetailsComponent} from "../product-details/product-details.component";


interface Sort{
  value:string,
  viewValue:string
}

export interface ProizvodiSearchObject{
  Naziv:string,
  ComboBoxSearch:string,
  DobavljacSearch:number,
  KategorijaSearch:number,
  BrendSearch:number
}

@Component({
  selector: 'app-proizvodi-pregled',
  templateUrl: './proizvodi-pregled.component.html',
  styleUrls: ['./proizvodi-pregled.component.css']
})
export class ProizvodiPregledComponent implements OnInit {

  search:ProizvodiSearchObject = <ProizvodiSearchObject>{};
  listDobavljaci:Dobavljac[] = [];
  listKategorije:Kategorija[] = [];
  listBrendovi:Brend[] = [];
  listSort:Sort[] = [
    {value: 'Abeceda' , viewValue: 'A-Z'},
    {value: 'AbecedaUnazad' , viewValue: 'Z-A'},
    {value: 'CijenaNajskuplje' , viewValue: 'Po najvisoj cijeni'},
    {value: 'CijenaJeftino' , viewValue: 'Po najnizoj cijeni'}
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Proizvod> = new MatTableDataSource<Proizvod>();

  constructor(private ProizvodiService : ProizvodService, private DobavljaciService:DobavljacService, private KategorijaService:KategorijaService,
              private BrendService:BrendService, private changeDetectorRef: ChangeDetectorRef, private dialog:MatDialog, private cartService : CartService,
              private ruter : Router) { }

  ngOnInit(): void {
    this.ProizvodiService.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
    this.DobavljaciService.Get(new HttpParams()).subscribe(x => {
      this.listDobavljaci = x;
    })
    this.KategorijaService.Get(new HttpParams()).subscribe(x => {
      this.listKategorije = x;
    })
    this.BrendService.Get(new HttpParams()).subscribe(x => {
      this.listBrendovi = x;
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
    if(this.search.DobavljacSearch != undefined)
    {
      params = params.append('DobavljacSearch' , this.search.DobavljacSearch);
    }
    if(this.search.KategorijaSearch != undefined)
    {
      params = params.append('KategorijaSearch' , this.search.KategorijaSearch);
    }
    if(this.search.BrendSearch != undefined)
    {
      params = params.append('BrendSearch' , this.search.BrendSearch);
    }
    this.ProizvodiService.Get(params).subscribe(x => {
      this.dataSource.data = x;
    })
  }

  otvori_recenziju(r:any){
   // this.ruter.navigateByUrl('/proizvod-recenzija', r.id)
    this.ruter.navigate(['/proizvod-recenzija', r.id]);
  }
}
