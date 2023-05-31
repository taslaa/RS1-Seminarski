import { Component, OnInit } from '@angular/core';
import {KorisnikService} from "../servisi/korisnik.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isUserAuthenticated: boolean;

  constructor(private servis : KorisnikService) { }

  ngOnInit(): void {
    this.servis.authChanged
      .subscribe(res => {
        this.isUserAuthenticated = res;
      })
  }

  public logout = () => {
    this.servis.logout();
  }

}
