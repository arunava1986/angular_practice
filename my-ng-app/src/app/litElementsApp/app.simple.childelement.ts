import { LitElement, customElement, html, property, css } from "lit-element";

@customElement('simple-child-element')
export class SimpleChildLitElement extends LitElement {
    @property({type:Array}) products;
    @property({type:String}) columnHeader;

    constructor(){
        super();
        this.products = new Array<any>();
        this.columnHeader = '';
    }

    render(){
        return html `<th>${this.products.map((p)=>
            html `<th>${p[this.columnHeader]}</th>`)}</th>`;
    }
}