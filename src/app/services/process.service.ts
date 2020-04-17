import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  //detailProcessList:AngularFireList<any>;


  constructor( private db: AngularFireDatabase) { 
    //this.detailProcessList = db.list('DetailProcess');

  }

  //  //DetailProcessImage//
  //  getDetailProcessList(): Observable<any[]> {
  //   return this.detailProcessList.snapshotChanges().map(actions => {
  //     return actions.map(action => ({ key: action.key, value: action.payload.val() }));
  //   });
  // }

  // getDetailProcess(id): Observable<any> {
  //   return this.db.object('DetailProcess/' + id).snapshotChanges().map(res => {
  //     return res.payload.val();
  //   });
  // }

  // addDetailProcess(data) {
  //   return this.detailProcessList.push(data);
  // }

   
  // editDetailProcess(id, data) {
  //   return this.detailProcessList.update(id, data);
  // }
}
