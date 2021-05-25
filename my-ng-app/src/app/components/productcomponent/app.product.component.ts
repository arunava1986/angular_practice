import { Component, OnInit } from "@angular/core";

import { Product } from "./../../models/app.product.model";
import { ProductLogic } from "./../../models/app.product.logic";
import { Categories,Manufacturers } from "./../../models/app.constants";
 
 
@Component({
    selector: 'app-product-component',
    templateUrl:'./app.product.view.html'
})
export class ProductComponent implements OnInit {
    product:Product;
    products:Array<Product>;
    private logic:ProductLogic;
    // save these constants into local public properties so that they can be used for databinding
    categories = Categories;
    manufacturers  =Manufacturers;
    columnHeaders:Array<string>;
    constructor(){
        this.product = new Product();
        this.products = new Array<Product>();
        this.logic = new ProductLogic();
        this.columnHeaders = new Array<string>();
    }

    ngOnInit():void {
        //  Object.keys(obj), will read public members of the obj
        this.columnHeaders = Object.keys(this.product);
        console.log(JSON.stringify(this.columnHeaders));
        this.products  =this.logic.getProducts();
    } 

    clear():void {
        this.product = new Product();
    }
    save(){
        this.products = this.logic.saveProduct(this.product);
    }

    getSelectedProduct(p:Product):void {
        this.product = Object.assign({},p);
    }

    getCatName(evt:any):void {
        this.product.CategoryName = evt;
        console.log(`Cat NAme ${this.product.CategoryName}`);
    }
    getManName(evt:any):void {
        this.product.Manufacturer = evt;
        console.log(`Man NAme ${this.product.Manufacturer}`);
    }
}