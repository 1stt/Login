import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { map, tap, finalize } from 'rxjs/operators';
//import { Upload } from 'src/app/models/upload';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  items: Observable<any[]>;
  upload:Upload=new Upload();
  submitted = false;

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
  
  constructor(
    private storage: AngularFireStorage,private db: AngularFireDatabase
  
    ) {
      
      // this.items = db.list('/uploads', ref=> ref.orderByChild('time')).snapshotChanges().map(result=>{
      //   return result.reverse();
      // });
    }

  ngOnInit() {

    
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
  const dbPath = `test/${new Date().getTime()}_${file.name}`;
  console.log("test path:"+ dbPath);
  
  // Totally optional metadata
  const customMetadata = { app: 'My AngularFire-powered PWA!' };

  // The main task
  this.task = this.storage.upload(dbPath, file, { customMetadata })
  const ref = this.storage.ref(dbPath)
   // Progress monitoring
   this.percentage = this.task.percentageChanges();
   this.snapshot   = this.task.snapshotChanges().pipe(
    
     tap(snap => {
       console.log(snap)
       if (snap.bytesTransferred === snap.totalBytes) {
        
           this.downloadURL.subscribe((url)=>{
            //  this.upload.imgUrl = url.toString();
            //  this.upload.imgname = dbPath;
             this.isUpload = true;
             console.log(555555555555555);
             console.log(`"imgUrl": ${this.upload.imgUrl}`)
 
 
           })
       
       
       }
     })
   )
   this.snapshot.subscribe();
  }

  newCustomer(): void {
    this.submitted = false;
    this.upload = new Upload();
  }

  // save() {
  //   this.uploadService.createCustomer(this.upload);
  //   this.upload = new Upload();
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.save();
  // }

  // updateCustomer(key: string, value: any): Promise<void> {
  //   return this.uploadList.update(key, value);
  // }

  // deleteCustomer(key: string): Promise<void> {
  //   return this.uploadList.remove(key);
  // }
onClickSubmit(){
  let itemRef = this.db.list('uploads');
  itemRef.push(this.upload);
}
onClickDelete(item){
  let itemRef = this.db.list('uploads');
  itemRef.remove(item.key);
}
// onClickupdate(){
//   let itemRef = this.db.list('uploads');
//   itemRef.update(item.key);
// }
  
}
 class Upload {
    
 
  name: "";
  url: "";
  file: "";
  date: "";
  farmName: "";
  imgUrl:"";
  imgname:"";


  
 }
