import { Component, OnInit } from '@angular/core';
declare const App:any;

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    App.initialLoadPage();
  }

}
