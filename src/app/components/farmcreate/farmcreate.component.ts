import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/farm';
import { FarmService } from 'src/app/services/farm.service';
import { getProvince } from 'src/data/Province';
import { getDistricts } from 'src/data/Districts';
import { getSubDistricts } from 'src/data/SubDistricts';

@Component({
  selector: 'app-farmcreate',
  templateUrl: './farmcreate.component.html',
  styleUrls: ['./farmcreate.component.css']
})
export class FarmcreateComponent implements OnInit {

 
  // farm:Farm=new this.farm();
 
  farm:Farm=new Farm();
  submitted = false;
  pro = getProvince();
  dis = getDistricts();
  sub = getSubDistricts();
  // a = findDistricts(1)
  disShow = this.dis
  subDisShow = this.sub


  constructor(private farmService: FarmService) { }

  ngOnInit() {
  }
  newCustomer(): void {
    this.submitted = false;
    this.farm = new Farm();
  }

  save() {
    this.farmService.createCustomer(this.farm);
    this.farm = new Farm();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  findSubDistricts(event) {
    let findSubDis = this.sub
    const result =  findSubDis.filter( (disName) => {
      return disName.DISTRICT_ID == event.target.value
    })
    console.log(result)
    this.subDisShow = result
  }
  
}
