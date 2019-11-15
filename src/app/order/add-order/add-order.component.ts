import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  formData = [
    { for: "name", control: "input", type: "text", label: "Customer buyer name: ", placeholder: "Enter Customer buyer name", id: "name", control_name: "name" },
    { for: "due", control: "input", type: "text", label: "Order Due Date: ", placeholder: "Enter Order Due Date", id: "due", control_name: "due" },
    { for: "address", control: "input", type: "text", label: "Customer Address: ", placeholder: "Enter Address", id: "address", control_name: "address" },
    { for: "phone", control: "input", type: "text", label: "Customer Phone: ", placeholder: "Enter Customer Phone", id: "phone", control_name: "phone" },
    { for: "total", control: "input", type: "text", label: "Order Total: ", placeholder: "Enter Order Total", id: "total", control_name: "total" }

  ]

  customForm = this.fb.group({
    name: [''],
    due: [''],
    address: [''],
    phone: [''],
    total: ['']
  });

  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.httpService.postHttp("/details.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
        this.router.navigateByUrl('/orders');
      });
  }

}
