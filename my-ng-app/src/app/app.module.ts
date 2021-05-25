import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { createCustomElement } from "@angular/elements"; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { DropDownComponent } from './directives/componentsirective/app.dropdown.component';
import { ProductFormComponent } from './components/productformcomponent/app.productform.component';
import { ColorDirective } from './directives/attributedirective/app.color.directive';

import { StringUtiities } from "./services/app.utility.service";
import { UtilityComponent } from './components/utilityservicecomponent/app.utility.component';
import { UtilityLibModule } from 'src/library/app.library.module';
import { SimpleComponent } from 'src/library/messagecomponent/app.simple.component';
import { CategorySenderComponent } from './components/communicationcomponents/app.categorysender.component';
import { ProductReceiverComponent } from './components/communicationcomponents/app.productreceiver.component';
import { HttpServieComponent } from './components/httpservicecomponent/app.httpservice.comppnent';
import { DropDownElementComponent } from './eleemntsapp/app.dropdown.element';
import { ElementUserComponent } from './eleemntsapp/app.elementuser.component';
 // imporiting the litelement code file
import './litElementsApp/app.simple.litelement'
import { LitElementComponent } from './litElementsApp/app.litelement.component';

 
// The AppModule class is decoared with @NgModule, to set the behavior of AppMOdule as 'Angular-MOdule'
// aka 'the container for all Angular Standard object'

@NgModule({
  declarations: [
    AppComponent, ProductComponent, DropDownComponent,
     ProductFormComponent, ColorDirective,
     UtilityComponent,
     CategorySenderComponent, ProductReceiverComponent,
     HttpServieComponent, DropDownElementComponent, ElementUserComponent,
     LitElementComponent
  ],
   

  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule,
    AppRoutingModule, UtilityLibModule
  ],
  // support for using WebComponents (Exported Angular Component as Elements and LitElement)
   schemas:[CUSTOM_ELEMENTS_SCHEMA],
   // indicated that the 'DropDownElementComponent' must be used as element rather than component 
   entryComponents:[DropDownElementComponent], 
  // registering the service as singleton instance
  // providers is a DI container
  // is making the Service Instance available to Components from
  // different Module
 // providers: [StringUtiities],
  bootstrap: [LitElementComponent]
})
export class AppModule { 

  // code for registering Angular Component as the Custom HTML element so that it can be
  // accessed on browser using Current Angular Application's component as well as in other 
  // HTML pages using JavaScript
  constructor(private injector:Injector){
    // register the component as element
    const dropDownElement = createCustomElement(DropDownElementComponent, {injector:this.injector});
    // lets define the custom tag
    customElements.define('dropdown-element', dropDownElement);
  }

}
