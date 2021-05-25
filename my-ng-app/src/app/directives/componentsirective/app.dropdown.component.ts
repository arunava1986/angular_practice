import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dropdown-component',
    templateUrl: './app.dropdown.view.html'
})

export class DropDownComponent implements OnInit {
    private _DataSource:Array<any>;
    value:string;
    defaultValue:string;
    @Output()
    notify:EventEmitter<any>;
    constructor() { 
        this._DataSource = new Array<any>();
        // the 'any' is a type of data that will be emitted from child to parent
        this.notify = new EventEmitter<any>();    
        this.value = '';
        this.defaultValue = '';
    }

    ngOnInit() { }
    // <app-dropdown-component [DataSource]=""/>
    @Input()
    set DataSource(v:Array<any>){
        this._DataSource = v;
        this.defaultValue = this._DataSource[0];
    }
    get DataSource():Array<any> {
        return this._DataSource;
    }

    // this method will emit the selected from the currentn component to ite parenrt
    emitSelectedValue(v:any):void {
        this.notify.emit(v);
    }
   

}