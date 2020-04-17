import { Component, OnInit } from '@angular/core';
import { TesturlService } from 'src/app/services/testurl.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {

  tests:any[];

  constructor(private testurlService:TesturlService) { }

  ngOnInit(){

     // Use snapshotChanges().pipe(map()) to store the key
     this.testurlService.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(tests => {
      this.tests = tests;
    });
  }

}
