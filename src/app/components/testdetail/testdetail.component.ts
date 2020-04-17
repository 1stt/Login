import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/models/test';
import { TesturlService } from 'src/app/services/testurl.service';

@Component({
  selector: 'app-testdetail',
  templateUrl: './testdetail.component.html',
  styleUrls: ['./testdetail.component.css']
})
export class TestdetailComponent implements OnInit {

  @Input() test:Test;
  constructor(private testurlService:TesturlService) { }

  ngOnInit() {
  }

  deleteFileUpload(test) {
    this.testurlService.deleteFileUpload(test);
  }

}
