import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationService } from 'src/app/services/app.communication.service';
import {Product,Products} from './../../models/app.communications.model';
@Component({
    selector: 'app-productreceiver-component',
    template: `
      <h2>The Product Receiver Compponent</h2>
      <div class="container">
          <strong>
              Products for Category Id : {{data}}
          </strong>
      </div>
      <table class="table table-bordered table-striped">
          <thead>
              <tr>
                  <th>Prd. Id</th>
                  <th>Prd. Name</th>
                  <th>Cat. Id</th>
              </tr>
          </thead>
          <tbody>
              <tr *ngFor="let data of FilteredProducts">
                  <td>{{data.PrdId}}</td>
                  <td>{{data.PrdName}}</td>
                  <td>{{data.CatId}}</td>
              </tr>
          </tbody>
      </table>
    `
})

export class ProductReceiverComponent implements OnInit,OnDestroy {
    prd:Product;
    prds = Products;
    data:any;
    private _FilteredProducts:Array<Product>; 
    constructor(private serv:CommunicationService) { 
        this.prd = new Product(0,'',0);
        this._FilteredProducts = new Array<Product>();
    }

    ngOnInit() { 
        // subscribe to the event emitted by the service and receive the data
        this.serv.notify.subscribe((value)=>{
            this.data = value;
        });
    }

    // implement the read-only proeprty that will invoked when the 'data' proeprty 
    // is changed on component based on data received from sender

    get FilteredProducts():Array<Product>{
        this._FilteredProducts = new Array<Product>();
        if(this.data !== undefined) {
            this._FilteredProducts = this.prds.filter((p)=>{
                return p.CatId === this.data;
            });
        } else {
            this._FilteredProducts = this.prds;
        }

        return this._FilteredProducts
    }

    ngOnDestroy():void {
        this.serv.notify.unsubscribe();
    }
}