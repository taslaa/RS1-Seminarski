import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoginComponent} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(private router : Router, private jwtHelper: JwtHelperService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }

    prijava() {
    this.router.navigateByUrl('/login')
  }

  gost() {
    this.router.navigateByUrl('/proizvodi-pregled')
  }

  onCreate(){
    this.dialog.open(LoginComponent);
  }
}
