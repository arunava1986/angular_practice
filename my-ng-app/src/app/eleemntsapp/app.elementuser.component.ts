import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elementuser-component',
    template: `
      <h1>The Angular Component using Angular Element</h1>
      <div class="container">
        Received Value from the Element = {{receiverValue}}
      </div>
      <!--To Subscribe to the event using  'on-' prefix to access the event
      the Custom element will be processed by 'CustomElementRegistery' and this offers the 
      CustomEvent() object to dispatch event from the element and the payload is $event object
     the data from the event will be read using 'event.detail' property-->
     <!-- Names: <dropdown-element [DataSource]="data" on-notify="onNotifyValue($event)"></dropdown-element> -->
     Namea: <dropdown-element></dropdown-element>
      
    `
})

export class ElementUserComponent implements OnInit {
    data:Array<string>;
    receiverValue:string;
    constructor() { 
        this.data = new Array<string>();
        this.data.push('Mahesh');
        this.data.push('Tejas');
        this.data.push('Mukesh');
        this.data.push('Sandeep');
        this.receiverValue = '';
    }

    onNotifyValue(event:any){
        this.receiverValue = event.detail;
    }
    ngOnInit() { }
}