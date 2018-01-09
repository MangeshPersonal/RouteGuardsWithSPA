import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

formCompleted:boolean=true;

setFormCompleted()
{
  this.formCompleted=true
}


  constructor() { }

  ngOnInit() {
  }

}
