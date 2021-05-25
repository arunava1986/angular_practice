import { Component, OnInit } from '@angular/core';
import { Product } from "../models/app.product.model";
@Component({
    selector: 'app-litelement-component',
    template: `
       <h1>Using the LitElement in Angular Application</h1>
       <input type="button" value="Change Message" (click)="cheangeMessage()">
       <hr>
       Enter New Message <input type="text" [(ngModel)]="message" class="form-control">

       <simple-element [inputMessage]="message" [list]="values" [columnHeaders]="columnHeaders"
        on-lit-click="receiveMessage($event)"
          [fname]="'Mahesh'" [lname]="'Sabnis'"></simple-element>
        <hr/>
        <strong>
            {{receivedData}}
        </strong>
    `
})

export class LitElementComponent implements OnInit {
    message:string;
    receivedData:string;
    values:Array<Product>;
    product:Product;
    columnHeaders:Array<string>;
    constructor() {
        this.message = 'Hi, I am your Angular Container Component!!!!';
        this.product = new Product();
        this.columnHeaders = new Array<string>();
        this.values =new Array<Product>();
        this.values.push({ProductRowId: 1, ProductId: '1001', ProductName: 'Television', Description: 'TV', CategoryName: 'Electronics', Manufacturer: 'Onida',BasePrice: 15000});
        this.values.push({ProductRowId: 2, ProductId: '1002', ProductName: 'Laptop', Description: 'laptop', CategoryName: 'Electronics', Manufacturer: 'HP',BasePrice: 25000});
        this.values.push({ProductRowId: 3, ProductId: '1003', ProductName: 'Mobile', Description: 'Smart phone', CategoryName: 'Electronics', Manufacturer: 'MI',BasePrice: 10000});
        this.receivedData = '';
     }

    ngOnInit() {
        this.columnHeaders = Object.keys(this.product);
     }
    receiveMessage(event:any):void {
        this.receivedData = event.detail.data;
    }
    cheangeMessage():void {
        this.message = 'Hi!! LitElement, Take this new Message';
    }
}