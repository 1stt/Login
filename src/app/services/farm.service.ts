import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Farm } from '../models/farm';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  private dbPath = '/farm';


  farmList:AngularFireList<Farm>;

  constructor(private db: AngularFireDatabase) {
    this.farmList = db.list(this.dbPath);


   }
   
   createCustomer(farm: Farm): void {
    this.farmList.push(farm);
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.farmList.update(key, value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.farmList.remove(key);
  }

  getCustomersList(): AngularFireList<Farm> {
    return this.farmList;
  }

  deleteAll(): Promise<void> {
    return this.farmList.remove();
  }




}

