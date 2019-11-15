import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  tableHeaders = [
    "Order Number",
    "Customer buyer name",
    "Order Due Date",
    "Customer Address",
    "Customer Phone",
    "Order Total",
    "Actions"
  ]

  details = [];
  loading = false;
  showMsg: boolean;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.loading = true;
    this.http.getHttp("/details.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.details = data['data'];
    });
    
  }
  deleteDetail(id, detailId) {
    this.loading = true;
    this.http.deleteHttp("/details/" + id + ".json").subscribe(data => {
      console.log(data);
      this.details.splice(detailId, 1);
      this.loading = false;
    });
  }
}
