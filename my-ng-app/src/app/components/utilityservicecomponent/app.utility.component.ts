import { Component, OnInit } from '@angular/core';
import { StringUtiities } from "./../../services/app.utility.service";
@Component({
    selector: 'app-utility-component',
    template: `
      <h1>The Angular Service Utility Component</h1>
      <div class="container">
          <strong>
              Original String:  {{name}}
          </strong>
      </div>
      <hr>
      <div class="container">
          <strong>
              Upper  Case String:  {{upperName}}
          </strong>
      </div>
      <hr>
      <div class="container">
          <strong>
              Lower  Case String:  {{lowerName}}
          </strong>
      </div>
      <hr>
      <div class="container">
          <strong>
              Length of {{name}} is =   {{length}}
          </strong>
      </div>
      <hr>
    `
})

export class UtilityComponent implements OnInit {
    name:string;
    upperName:string;
    lowerName:string;
    length:number;    

    // inject the service as constructor injection
    constructor(private serv:StringUtiities) {
        this.name = 'The Angular Utiltity Service';
        this.upperName ='';
        this.lowerName = '';
        this.length = 0;
     }

    ngOnInit() { 
        this.upperName = this.serv.changeCase(this.name, 'U');
        this.lowerName = this.serv.changeCase(this.name, 'L');
        this.length = this.serv.getLength(this.name);
    }
}