import { Component, OnInit } from '@angular/core';
 
import { Product } from 'src/app/models/app.product.model';
import { AuthUser, RegisterUser, ResponseObject } from 'src/app/models/app.security.models';
import { HttpService } from 'src/app/services/app.http.service';
import { HttpSecureService } from 'src/app/services/app.secure.service';

@Component({
    selector: 'app-httpservice-component',
    templateUrl: './app.httpservice.view.html'
})

export class HttpServieComponent implements OnInit {
    product:Product;
    products:Array<Product>;
    message:string;
    response: ResponseObject;
    constructor(private serv:HttpService, private secureServ:HttpSecureService) { 
        this.product = new Product();
        this.products = new Array<Product>();
        this.message = '';
        this.response = new ResponseObject('','',{});
    }

    // get and print data in ngOnInit
    ngOnInit() {
        this.loadData();
    }

    loadData():void {
        this.serv.getData().subscribe((response)=>{
            // data will be streamed from Observable and will be delivered to the component
            this.products = response;
            this.message = 'data received successfully';
        },(error)=>{
            this.message=`Error Occured while receiving data ${error}`;    
        });
    }

    saveData():void {
        this.product.ProductId = 'Prd-10002';
        this.product.ProductName = 'Water Bottle';
        this.product.CategoryName = 'Home Appliances';
        this.product.Manufacturer = 'Neeri';
        this.product.Description = '1 Litter';
        this.product.BasePrice = 70;
        this.serv.postData(this.product).subscribe((response)=>{
            // data will be streamed from Observable and will be delivered to the component
            this.products.push(response);
            this.message = 'data added successfully';
        },(error)=>{
            this.message=`Error Occured while adding data ${error}`;    
        });
    }

    registerNewUser():void{
        let newUser = new RegisterUser(9001, "userX", "Pass1", "userX@msit.com");
        this.secureServ.register(newUser).subscribe((resp)=>{
            this.response.message = resp.message;
            this.response.response = resp.response;
            this.message =  JSON.stringify(this.response);
        },(error)=>{
            this.message = `Error Occured ${error}`;
        });
    }
    authUser():void {
        let newUser = new AuthUser("userX", "Pass1");
        this.secureServ.auth(newUser).subscribe((resp)=>{
            this.response.message = resp.message;
            this.response.token = resp.token;
            // save the token in the sessionStorage of the browser (If using NGRX then save it in Store)
            sessionStorage.setItem("token", this.response.token);
            this.message =  JSON.stringify(this.response);
        
        },(error)=>{
            this.message = `Error Occured ${error}`;
        });
    }

    getData():void {
        // receive token from the session storage
        let token:any  =  sessionStorage.getItem("token");
        this.secureServ.getData(token).subscribe((resp)=>{
            this.response.response = resp.response;
        },(error)=>{
            this.message = `Error Occured ${error}`;
        });
    }
}