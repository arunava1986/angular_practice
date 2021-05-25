import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { Product } from "../../models/app.product.model";
import { ProductLogic } from "../../models/app.product.logic";
import { Categories,Manufacturers } from "../../models/app.constants";
import { CustomValidator } from "./app.custom.validator"; 
 
@Component({
    selector: 'app-productform-component',
    templateUrl:'./app.productform.view.html'
})
export class ProductFormComponent implements OnInit {
    product:Product;
    products:Array<Product>;
    private logic:ProductLogic;
    // save these constants into local public properties so that they can be used for databinding
    categories = Categories;
    manufacturers  =Manufacturers;
    columnHeaders:Array<string>;
    color:string;

    frmProduct:FormGroup;

    constructor(){
        this.product = new Product();
        this.products = new Array<Product>();
        this.logic = new ProductLogic();
        this.columnHeaders = new Array<string>();
        this.color = '';

        // instantiate the FormGroup and map it with the Model class using FormContol and validation rules
        //  'ProductRowId': new FormControl(this.product.ProductRowId)
        //  <Key>: MApped with the Model class property usig FormControl
        // this <Key> will be used as formControlName   
        this.frmProduct = new FormGroup({
            'ProductRowId': new FormControl(this.product.ProductRowId,
                 Validators.compose([
                     Validators.required,
                     Validators.minLength(2),
                     Validators.maxLength(8),
                     Validators.pattern('[0-9]+'),
                     CustomValidator.checkEven
                 ])),
            'ProductId': new FormControl(this.product.ProductId),
            'ProductName': new FormControl(this.product.ProductName),
            'CategoryName': new FormControl(this.product.CategoryName),
            'Manufacturer': new FormControl(this.product.Manufacturer),
            'Description': new FormControl(this.product.Description),
            'BasePrice': new FormControl(this.product.BasePrice)
        });


    }

    ngOnInit():void {
        //  Object.keys(obj), will read public members of the obj
        this.columnHeaders = Object.keys(this.product);
        console.log(JSON.stringify(this.columnHeaders));
        this.products  =this.logic.getProducts();
    } 

    clear():void {
        this.product = new Product();
        this.frmProduct.setValue(this.product);
    }
    save(){
        this.product = this.frmProduct.value;
        this.products = this.logic.saveProduct(this.product);
    }

    getSelectedProduct(p:Product):void {
        this.frmProduct.setValue(p);
    }

     
}