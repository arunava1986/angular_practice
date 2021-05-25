import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    templateUrl: './app.dropdown.view.html'
})

export class DropDownElementComponent implements OnInit {
    private _DataSource:Array<any>;
    value:any;
    defaultValue:string;
    @Output()
    notify:EventEmitter<any>;
    constructor() { 
        this._DataSource = new Array<any>();
      
        this.notify = new EventEmitter<any>();    
        this.value = '';
        this.defaultValue = '';
    }
    ngOnInit() { }
    @Input()
    set DataSource(v:Array<any>){
        this._DataSource = v;
        this.defaultValue = this._DataSource[0];
    }
    get DataSource():Array<any> {
        return this._DataSource;
    }

    emitSelectedValue(v:any):void {
        this.notify.emit(v);
    }
}