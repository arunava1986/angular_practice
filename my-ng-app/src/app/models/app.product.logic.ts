import { Product } from "./app.product.model";

export class ProductLogic {
    private products:Array<Product>;
    private prd: Product;
    constructor(){
        this.products = new Array<Product>();
        this.prd = new Product();
        this.prd.ProductRowId=101;
        this.prd.ProductId='Prd-001';
        this.prd.ProductName='Laptop';
        this.prd.CategoryName='Electronics'
        this.prd.Manufacturer = 'IBM';
        this.prd.Description='Gaming'; 
        this.prd.BasePrice=90000;

        this.products.push(this.prd);
    }

    getProducts():Array<Product>{
        return this.products;
    }
    saveProduct(p:Product):Array<Product>{
        this.products.push(p);
        return this.products;
    }
}