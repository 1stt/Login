import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

 //สร้าง Validate
 comparePassword(paawordField:string){
  return function (confirm_password: AbstractControl){

    if(!confirm_password.parent)return;
    const password =confirm_password.parent.get(paawordField);

    const passwordsubscripe=password.valueChanges.subscribe(() =>{
      confirm_password.updateValueAndValidity();
      passwordsubscripe.unsubscribe();
    });
    if(confirm_password.value=== password.value)
      return;
    return{compare:true};
  
  }
}

// ตรวจสอบ password pattern เป็น A-z 0-9, 6-15 ตัว
isPassword(password: AbstractControl) {
if (password.value == '') return;
if (/^[A-z0-9]{6,15}$/.test(password.value)) return;
return { password: true };
} 
}
