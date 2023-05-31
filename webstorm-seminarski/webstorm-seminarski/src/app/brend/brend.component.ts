import {Component, OnInit, ViewChild} from '@angular/core';
import {Prodavnica, ProdavnicaService} from "../servisi/prodavnica.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PrmodalComponent} from "../prodavnica/prmodal/prmodal.component";
import {Brend, BrendService} from "../servisi/brend.service";
import {BmodalComponent} from "./bmodal/bmodal.component";

@Component({
  selector: 'app-brend',
  templateUrl: './brend.component.html',
  styleUrls: ['./brend.component.css']
})
export class BrendComponent implements OnInit {

  filter:string= '';
  dodajBrend:Brend = <Brend>{};
  displayedColumns: string[] = ['nazivBrenda','luxury', 'drzava','slika','akcija'];
  dataSource = new MatTableDataSource<Brend>();
  @ViewChild('paginator') paginator: MatPaginator;


  ngAfterViewInit(){
    let x ;
    this.service.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }


  constructor(private httpKlijent:HttpClient, private service : BrendService,private dialog:MatDialog) { }

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

  ObrisiProizvod(x: Brend) {
    this.service.Delete(x.id).subscribe(() => {
      alert("Uspjesno brisanje");
      this.UcitajPodatke();
    })
  }

  Uredi(x: Brend) {
    let dialogRef = this.dialog.open(BmodalComponent, {data:x,  width:'30%',height:'70%'})

    dialogRef.afterClosed().subscribe(x => {
      this.service.Update(x.id , x).subscribe( () =>{
        alert("Uspjesno editovanje brenda");
        this.UcitajPodatke();
      })
    })
  }

  Novi(){
    let dialogRef = this.dialog.open(BmodalComponent, {data:this.dodajBrend,  width:'30%',height:'70%'})

    dialogRef.afterClosed().subscribe(x => {
      this.Dodaj(x);
    })
  }

  Dodaj(x: Brend) {
    this.service.Add(x).subscribe(() => {
      alert("Uspjesno dodavanje brenda");
      this.UcitajPodatke();
      this.dodajBrend = <Brend>{};
    })
  }
}
