import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/app.communication.service';
import {Categories,Category} from './../../models/app.communications.model';
@Component({
    selector: 'app-categorysender-component',
    template: `
      <h2>The Category Sender Compponent</h2>
      <table class="table table-bordered table-striped">
          <thead>
              <tr>
                  <th>Cat. Id</th>
                  <th>Cat. Name</th>
              </tr>
          </thead>
          <tbody>
              <tr *ngFor="let data of cats"
               (click)="getSelectedCategory(data)">
                  <td>{{data.CatId}}</td>
                  <td>{{data.CatName}}</td>
              </tr>
          </tbody>
      </table>
    `
})

export class CategorySenderComponent implements OnInit {
    cat:Category;
    cats = Categories;
    constructor(private serv: CommunicationService) { 
        this.cat = new Category(0,'');
    }

    ngOnInit() { }

    // selected CatId is passed to the method from tyhe service
    getSelectedCategory(c:Category):void {
        this.serv.receiveData(c.CatId);
    }
}