import { Component, OnInit } from '@angular/core';
import { TesturlService } from 'src/app/services/testurl.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Test } from 'src/app/models/test';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-test-url',
  templateUrl: './test-url.component.html',
  styleUrls: ['./test-url.component.css']
})
export class TestUrlComponent implements OnInit {

 
 
  selectedFiles: FileList;
  currentFileUpload: Test;
  percentage: number;
  
  constructor(private testurlService:TesturlService) { }

  ngOnInit() {
    
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new Test(file);
    this.testurlService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

}
