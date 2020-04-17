import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Member } from '../models/member';
import { AngularFireStorage } from '@angular/fire/storage';





@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private dbPath = '/member';
  memberList:AngularFireList<Member>;

  



  constructor(private db: AngularFireDatabase,
    ) {
    this.memberList = db.list(this.dbPath);


   }

   createCustomer(member: Member): void {
    this.memberList.push(member);
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.memberList.update(key, value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.memberList.remove(key);
  }

  getCustomersList(): AngularFireList<Member> {
    return this.memberList;
  }

  deleteAll(): Promise<void> {
    return this.memberList.remove();
  }
  
}
