import { Component, OnInit } from '@angular/core';
import { FarmService } from 'src/app/services/farm.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-farmlist',
  templateUrl: './farmlist.component.html',
  styleUrls: ['./farmlist.component.css']
})
export class FarmlistComponent implements OnInit {

  farms:any;

  constructor(private farmService: FarmService) { }

  ngOnInit(){
    this.getCustomersList();

  }

  getCustomersList() {
    this.farmService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(farms => {
      this.farms = farms;
    });
  }

  deleteCustomers() {
    this.farmService.deleteAll().catch(err => console.log(err));
  }


}
