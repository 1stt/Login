import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Upload } from '../models/upload';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
 

  private dbPath = '/upload';
  uploadList:AngularFireList<Upload>;


  constructor(private db: AngularFireDatabase) { 
    
    this.uploadList = db.list(this.dbPath);

  }

  createCustomer(upload: Upload): void {
    this.uploadList.push(upload);
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.uploadList.update(key, value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.uploadList.remove(key);
  }

  getCustomersList(): AngularFireList<Upload> {
    return this.uploadList;
  }

  deleteAll(): Promise<void> {
    return this.uploadList.remove();
  }

  

}
