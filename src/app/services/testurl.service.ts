import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Test } from '../models/test';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TesturlService {

  private basePath = '/uploads';

  //testurlList: AngularFireList<Test> = null;

 

  constructor(private db: AngularFireDatabase, 
    private storage: AngularFireStorage) { 

    //this.testurlList = db.list(this.dbPath);

  }

  pushFileToStorage(test: Test): Observable<number> {
    const filePath = `${this.basePath}/${test.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, test.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {

          console.log('File available at', downloadURL);
          test.url = downloadURL;
          //fileUpload.farmName =  fileUpload.farmName;
          test.name = test.file.name;
          this.saveFileData(test);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(test: Test) {
    this.db.list(this.basePath).push(test);
  }

  getFileUploads(numberItems): AngularFireList<Test> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFileUpload(test: Test) {
    this.deleteFileDatabase(test.key)
      .then(() => {
        this.deleteFileStorage(test.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
 
}
