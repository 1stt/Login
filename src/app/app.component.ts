import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';


declare const App:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReaiTimeWeb';
  ngOnInit(){
    App.initialLoadPage();
  }
}
