import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <input [(ngModel)]="twoWay" type="text">
  {{twoWay}}
  `,
  // templateUrl:'./test.component.html',
  // styleUrls: ['./test.component.scss']
  styles:[`
   .text-success{
   color:green;
  }`]
})
export class TestComponent implements OnInit {

  
  public twoWay=""; 
  public name ="ANGULAR"
  constructor() { }

  ngOnInit(): void {
  }

}
