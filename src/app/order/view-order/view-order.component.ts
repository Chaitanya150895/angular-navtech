import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {


  detail;
  
  loading = false;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      let id = params.get('detailId');

      this.http.getHttp("/details/" + id + ".json").subscribe(data => {
        this.loading = false;
        console.log(`${id}`);

        this.detail = data['data'];

        console.log(this.detail);
        // this.locationForm.setValue(this.location);

      });

    });
  }

}
