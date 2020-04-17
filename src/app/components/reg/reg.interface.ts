import { FormGroup, Form } from '@angular/forms';

export interface IRegComponent{
    form:FormGroup;
    Url:any;
    onSubmit();
}

export interface IReg {
    username:string;
    firstname:string;

    lastname:string;
    email:string;
    password:string;
    cpassword:string;
}