import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  formData = [
    { for: "id", control: "input", type: "hidden", label: "", placeholder: "Enter Customer buyer name", id: "id", control_name: "id" },
    { for: "name", control: "input", type: "text", label: "Customer buyer name: ", placeholder: "Enter Customer buyer name", id: "name", control_name: "name" },
    { for: "due", control: "input", type: "text", label: "Order Due Date: ", placeholder: "Enter Order Due Date", id: "due", control_name: "due" },
    { for: "address", control: "input", type: "text", label: "Customer Address: ", placeholder: "Enter Address", id: "address", control_name: "address" },
    { for: "phone", control: "input", type: "text", label: "Customer Phone: ", placeholder: "Enter Customer Phone", id: "phone", control_name: "phone" },
    { for: "total", control: "input", type: "text", label: "Order Total: ", placeholder: "Enter Order Total", id: "total", control_name: "total" }

  ]

  customForm = this.fb.group({
    id: [''],
    name: [''],
    due: [''],
    address: [''],
    phone: [''],
    total: ['']
  });

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['detailId'];
      this.httpService.getHttp("/details/" + id + ".json").subscribe(data => {
        console.log(data);
        let detail = data['data'];
        this.customForm.patchValue(detail);
        console.log('data');

        
      });
    });
  }

  onSubmit() {
    console.log(this.customForm.value.id);
    this.httpService.putHttp("/details/" + this.customForm.value.id + ".json", this.customForm.value)
      .pipe().subscribe(data => {
        console.log(data);
        this.customForm.reset();
        this.router.navigateByUrl('/details');
      }
      );
  }
}
