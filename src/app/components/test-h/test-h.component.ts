import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { tap, finalize } from 'rxjs/operators';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-test-h',
  templateUrl: './test-h.component.html',
  styleUrls: ['./test-h.component.css']
})
export class TestHComponent  {

  items:Observable<any[]>;
  upload:Upload = new Upload();
  //submitted = false;

   // Main task 
   task: AngularFireUploadTask;

   // Progress monitoring
   percentage: Observable<number>;
 
   snapshot: Observable<any>;
 
   // Download URL
   downloadURL: Observable<string>;
   isUpload:boolean  = false;

   

   uploadList:AngularFireList<Upload>;
  //  private dbPath = '/upload';
  
  constructor(private db:AngularFireDatabase,
    private storage: AngularFireStorage) { 
    // this.items = this.db.list('/customers').snapshotChanges(); 

      this.items = db.list('/uploads', ref=> ref.orderByChild('time')).snapshotChanges().map(result=>{
        return result.reverse();
      });
    
  }

 

  startUpload(event){
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }


    // The storage path
    const dbPath = `uploads/${new Date().getTime()}_${file.name}`;
    console.log("uploads path:"+ dbPath);
 
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(dbPath, file, { customMetadata });
    const ref = this.storage.ref(dbPath);
    
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(

    
      

    tap(snap => {
      //console.log(555555555555555);

      console.log(snap)
      if (snap.bytesTransferred === snap.totalBytes) {
        //console.log(555555555555555);

          ref.getDownloadURL().subscribe((url)=>{
            this.upload.imageUrl = url.toString();
            this.upload.imageName = dbPath;
            this.isUpload = true;
            console.log(555555555555555);
            console.log(`"imgUrl": ${this.upload.imageUrl}`);


          })
      }
    })
  )

  this.snapshot.subscribe();

  // this.snapshot.subscribe();
  // this.downloadURL = this.task.downloadURL();
  // this.downloadURL = ref.getDownloadURL();

 }

  onClickSubmit(){
    //สร้างโน๊ตใหม่ชื่อ customers ในกรณีที่ยังไม่มีสร้างใน db
    let itemref = this.db.list('uploads')
    itemref.push(this.upload); //คือการโยนค่า student ใส่ลงไปทั้งก้อน

    // this.isUpload =  false;
    // this.snapshot = null;
    // this.percentage = null;
    // this.upload.name= "";
    // this.upload.lastname= "";
    // this.upload.username= "";
    // this.upload.imageName= "";
    // this.upload.imageUrl= "";
    // this.upload.phone= "";


    }

    onClickDelete(item){
    console.log("key:" + JSON.stringify(item));
    let itemRef = this.db.list('uploads');
    itemRef.remove(item.key);

    var deserRef = this.storage.ref(item.payload.val().imageName);
    deserRef.delete().subscribe(()=>{
      console.log("delete");
    })
    }

}
class Upload{
  name = "";
  lastname = "";
  email = "";
  username = "";
  imageName = "";
  imageUrl = "";
  phone = "";
  timestamp = Date.now();
  }
