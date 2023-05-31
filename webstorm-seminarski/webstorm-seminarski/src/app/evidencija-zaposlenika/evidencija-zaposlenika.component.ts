import {Component, OnInit, ViewChild} from '@angular/core';
import {Korisnik, KorisnikService} from "../servisi/korisnik.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { EvidencijaZaposlenikaService} from "../servisi/evidencija-zaposlenika.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ZmodalComponent} from "../zaposlenici/zmodal/zmodal.component";
import {EzmodalComponent} from "../evidencijaZaposlenika/ezmodal/ezmodal.component";
import {EvidencijamodalComponent} from "./evidencijamodal/evidencijamodal.component";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-evidencija-zaposlenika',
  templateUrl: './evidencija-zaposlenika.component.html',
  styleUrls: ['./evidencija-zaposlenika.component.css']
})
export class EvidencijaZaposlenikaComponent implements OnInit {

  evidencija:any;
  novaEvidencija:any;
  korisnici:any;
  @ViewChild('paginator') paginator: MatPaginator;


  constructor(private httpKlijent:HttpClient, private service : EvidencijaZaposlenikaService,private dialog:MatDialog, private jwtHelper : JwtHelperService) { }

  ngOnInit(): void {
    this.ucitajKorisnike();
    this.ucitajEvidencije();
  }

  ucitajKorisnike(){
    this.service.GetKorisnik().subscribe((x:any)=>{
      this.korisnici = x;
    })
  }


  ucitajEvidencije(){
    this.httpKlijent.get("https://localhost:7025/EvidencijaZaposlenika/GetAll" ).subscribe((res:any) =>{
      this.evidencija = res;
    })
  }

  urediEvidenciju(evidencija:any){
    this.novaEvidencija = evidencija;
  }

  dodajEvidenciju(){
    this.novaEvidencija = {
      id:0,
      aktivan:false,
      datumPrijave:new Date(),
      datumOdjave: new Date(),
      korisnikId:this.GetUserId(),
      korisnikIme: this.GetUserName(),
    };
  }


  dodaj(){
    this.httpKlijent.post("https://localhost:7025/EvidencijaZaposlenika/Dodaj/", this.novaEvidencija).subscribe((res:any) =>{
      this.novaEvidencija = null;
    })
  }


  public GetUserName = (): string => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname']
    return name;
  }

  public GetUserId = (): string => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const id = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    return id;
  }
}
