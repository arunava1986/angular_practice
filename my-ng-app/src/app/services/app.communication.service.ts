import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CommunicationService {
    // state object
    data:any;
    notify:EventEmitter<any>;
    constructor() { 
        // event that will emit when the state is changed
        this.notify = new EventEmitter<any>(); 
    }

    // method invpoked by sender component to send data
    receiveData(val:any):void {
        this.data = val;
        // emit the new state
        this.notify.emit(this.data);
    }

    
}