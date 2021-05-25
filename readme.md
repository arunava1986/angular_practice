# Programming with Angular

- Using Angular CLI
    - The tool to create an Angular Project with all its dependencies
    - npm install -g @angular/cli
    - ng new <PROJECT-NAME>
- The Angular EcoSystem
    - "@angular/animations": "~12.0.0",
        - Animations
    - "@angular/common": "~12.0.0",
        - Used to manage the Angular Module Loading (Standard MOdules and External Custom Modules)
        - @angular/common/http (Angular 4+)
            - The Http COmmuncation Objects for All external Async Calls
    - "@angular/compiler": "~12.0.0",
        - Provide the Angular Dev. Compilation and Prod. Compilation
            -  Dev. Compilation
                - Standard Compilation where the object will be processed in the Browser when it is requested JUST like JIT
            - Prod. Compilation
                -  Uses the Ivy Engine Angular 10+
                    - Provide the Production Compression for Angular build output
                        - Minify the Output JavaScript Files
                        - Uses Ahead-Of-Time Compilation   
                    - Static Type Checking for Properties Bound with HTML elements
                        - If the text propety of code is bound with numeric property of HTML element then this generates compiler error     
                - Angular's Component ENcapsulate HTML (inline HTML or External HTML file)        
    - "@angular/core": "~12.0.0",
        - The foundation of Angular. Contains Most of the major Classes for Angular development
            - NgModule: Creating Ananular Module. COntainer for All Standard Angular and Developer  defined Application class 
            - Component, Directive, Injectable, Pipe, Input, Output, HostListener, etc.   
    - "@angular/forms": "~12.0.0",
        - Angular Forms for Reactive Forms like MVC Views and for Model Validation 
    - "@angular/platform-browser": "~12.0.0",
        - Provide a 'BrowserModule' class, used to load and render the Angular Module with all its dependencies on Browser's UI Thread
            - Each Angular app has 'ONLY-ONE' BrowserModule instance
            - Manage the lifecycle of Component
                - Manages Binding of Components
                    - Interpolation, showing data of Property inside the component on HTML UI
                    - Property-Binding, bind the property of COmponent with HTML element's attribute
                    - Event-Binding, bind a method of the omponent with the event of the HTML Element
                    - Two-Way Binding = Property Binding + Event BInding  
                - Manages an 'INCREAMENTAL-DOM' (?)    
    - "@angular/platform-browser-dynamic": "~12.0.0",
        - The Package that provides 'bootstrapModule()' method to bootstrap Angular Application in Browser
            - Loads the Angular App in browser and Manage its lifecycle(?)
            - Uses to Expose the Angular Component as a Custom Element (aka Angular Element) so that third party JavaScript Library / Framework can use it (Micro Front-End) 
                - @angular/elements
    - "@angular/router": "~12.0.0",
        - for SIngle Page Applications using Routing
    - "rxjs": "~6.6.0",
        - Reactvie Extensions for JavaScript
        - Provides an Object Model to Maintain teh state of HTTP Response in Component
        - Used to perform paralles calls to external HTTP Services
        - Manage the Promise based subscription  for al external Async calls
    - "tslib": "^2.1.0",
        - the TYpeScript Transpilation with Polyfills. High-Level TypeScript code will be succssfully compiled and will be transformed into JavaScript w/o warnings
    - "zone.js": "~0.11.4"    
        - The Polyfills for Managing POst-Loading Warnings and Error Messages in the browser
        - This generates the Stack Trace to understand and resolve errors

# Angular CLI Project Structure
    - package.json
    - tsconfig.app.json
        - TypeScript Application COnfiguration for Angular Application
        - This is based on tsconfig.json
            - Configuration for
                - Angular Compilation
                    - forceConsistentCasingInFileNames
                        - Class Names must use PascalCase
                        - Compponent File Name
                            - <NAME>.component.ts
                        - Module FIle Name
                            - <NAME>.module.ts
                        - Service
                            - <NAME>.service.ts
                        - Directive
                            - <NAME>.directive.ts
                        - Pipe
                            - <NAME>.pipoe.ts                 
                - Build
                     "experimentalDecorators": true,
                        - Compile the decorators applied on developers classes / function / property to generate additional behavior or exeuction for the class or function
                        - Power of Angular that is transpiled by TypeScript and executed by Browser
                        - E.g.
                            - @NgModule, @Compopnent, @Injectable, @Directive, @Pipe, etc.    
                     "moduleResolution": "node",
                        - Resolves all imports w.r.t. the File IO using Node.js
                - Destination / Distributable FOlders
                - EndtrPoint
                        "files": [
                            "src/main.ts", 
                            "src/polyfills.ts"
                        ],
                        - compilation will start from main.ts then use 'moduleResolution' to import all imported files and its depednencies for a single Unit of compiled output and uses the polyfilles that compilation will be done w/o any warning and the output js must be Browser compatible
                            - main.js
                - Module Resolution
                - Lib Support for Transpilation
                - Angular 10+
                    - Static Type Check for HTML
    - tscopnfig.spec.json
        - based on tsconfig.json but used for running test-scrips
            - <NAME>.spec.ts or <NAME>.test.ts
        - uses 'jasmin' library by default for testing                     

# Angular Production Build
- ng serve -prod
    - USes 'Ivy' Engine from Angular 10+
    - Removes all unUsed resoureces from the Production Build
    - No Compilation for Static HTMLs, instaed they wll be  directly converted as JS Objects and mergerd in main.js
    - All standard Angular Packages will be compiled, compressed and merged with 'main.js' (Standard Packages + Application Code), result into size increase
- Using component for Rendering into te Browser using index.html
    - The Component must have the 'selector'
    - The Component must be declared into 'declarations:[]' array of NgModule
    - The Component must be passed into the 'bootstrap:[]' array of NgModule
    - The selector of the component must be used in idnex.html 

# Angular Binding aka DataBinding
1. Interpolation
    - Exposing public data member of the Component class with the HTML template using interpolated expression
        - {{<PROPERTY-NAME>}}
        - e.g. {{message}}, the 'message' is a public property of the component class
        - Read-only from the UI
        - This may also accept the JS compiled formula expressions
            - {{100+3000}}
2. Property Binding
    - Exposing the public data memebr of the component to the readable / writable attrbute of HTML: element
        - [<ATTRIBUTE-OF-HTML-ELEMENT>] = "<PROPERTY-NAME>"
        - e.g.
            - <input type="text" [value]="message">
                - [value], the Angular compiled attirbute of HTML binding with 'message' property of the component
                    - [href], [style],[disabled], etc.   
            - THis is one-way from Component to UI              
3. Event-Bindng
    - Exposing publc methods of component class to an event of HTML element
    - The event is raised on UI and update the component's property
    - (<EVENT-NAME>) = "<PUBLIC-FUNCTION-NAME>"
    - e.g.
        - <input type="button" (click)="display()">
            - display() is a public methodm of the component
            - e.g. (change), (keyup), etc.
4. Two-Way Binding
    - Combination of Property Binding + Event Binding           
    - Synatx
        - [(ngModel)]="<PROPERTY-NAME>"
            - ngModel is a  standard Angular  Directive used as a attribute directive (an attribute of HTML element) for two-way binding 
            - <input type="text" [(ngModel)]="name">
                - name is the public property from COMPONENT
    - ngModel is available in 'FormsModule' from @angular/forms
        - import this in NgModule imports:[] 
            - When ngModel is used the following steps will be monitored and executed by Angular System
                - The default event on the HTML element will be listened by ngModel
                    - e.g. id input:text then default event is 'keyup'
                - The ngModel will raise the 'ngModelChanged' event as response to default event and read the value that is entered / selected / generated for the HTML element
                    - e.g. input:text, the 'value' attribute will be impacted for default event
                - BAsed on the ngModelChanged the Component will call its 'change' event (OnChanges)
                - The Compont will receive the new value from ngModelChanges
                - This new value will be updated in public property bound with the ngModel
                - The component will send value back to UI and update the UI    
5. Directives
    - They are standard object used for following
        - Creating Custom Reusable UI
            - 'Component Directive', each component is directive 
        - Assigning a custom behavior to HTML element as attribute
            - 'Attribute Directive' e.g. ngModel, formControlName, formGroup, etc.
        - Generating the HTML Element Dynamically based on Condition to modify HTML Structure
            - Structural Directives
                - *ngFor, execute for..of loop on UI    
                - *ngIf, if condition to add / remove HTML element from DOM
                - *ngShow, now we use this for [hidden] proeprty binding    
                    - show / hide HTML elements      
                - *ngSwich--ngSwitchCase       


# Angular's DOM Rendering
    - BrowserModule renders the DOM of the HTML Template of the Component based on Binding and Directives
    - THis uses 'Increamental DOM'
        - This stored the previous rendering request into browsr's memory
            - when any DOM updates are requested (resultant of binding or structiral directives)
                - The new request dom is compared with already cached DOM and only changed are pushed for rendering
                - Incremental changes on to the enw DOM request with less memory-footprint   

# Programming with Angular
- Creating Angular Component using of Model classes for Application Development
    - Component
        - Data Properties
            - Received from Model classes
        - Events
            - Use to exeucte 'some-front-end-logic'
                - Provided to component using the Presenter Logic class 
        - If component uses (hence the Anngular Application) the third party CSS lib / frwk theninstall it using the following command
            - npm instal; --save bootstrap
        - Configure this lib /  frwk in the 'styles' of angular.json in the build configuration      
        - Angular Component's Lifecycle Methods
            - OnChange, ths interface implemented by Component. THis has 'ngOnChange()'
                - Executed when a property is changed. Invoked after ctor but before ngOnInit
            - OnInit, the interface implemented by Component. THis has 'ngOnInit()'
                -  ngOnInit(), method will be invoked immediately after constructor
                    - Write logic thatb we cannot prefer to write inside ctor 
                        - e.g. HTTP Service calls or any other resource intensive operations
            - OnDoCheck, ths interface implemented by Component. THis has 'ngDoCheck()'
                - Check for any updated needed in HTML based on Property Changed. Invoked afeter ngOnInit  
            - Then View Methods     
        - Practices to be followed while definig HTML generation for the component based on the data
            - If the HTML elements e.g. Table is dynamically egnerated based on external data, then avoid hardcoding of Headers and Rows in HTML. Instead use the generalization using JavaScript REflection fearures
            - If the TypeScript class (4.0+) is used to read is properties dynamically in iteration then the class must have an 'Index Signetire' to support the property names reading in iteration
                - [x:string]:any
                    - Add this member in the typescript class
                        - x will be the name of the property. This property name will be string
                        - any is the type of the property       
            - If a same HTML UI is appearing multiple times in single or across multiple components, then think of creating re-usable component and use it as child component   
                - Using the Component as 'Directive'         
    - Component Rusability
        - The Child COmponent Must have @Input() decorated prtoperty for acceping data from parent. Thsi property will be used for 'Proeprty-Binding' by parent component. The child component must have @Output() decorated EventEmitter<T> property that will emit an event from child to parent and parent will subscribe it as 'Event-Binding'. Data emitted fron child to parent will be captured byb paret using $event object. (JAVASCRIPT standard event object) 
    - Forms 
        - FOllowing error will occur when the ngModel is enclosed inside the <form> tag
            - If ngModel is used within a form tag, either the name attribute must be set or the form
                    control must be defined as 'standalone' in ngModelOptions.
            - Reason for Error: the <form> tag expects name:value pair as a combinition for data to be posted from UI inside the <form>, where as the 'ngModel' is configured to change each property of UI and update it separately on the component and hence the FormModel will not be formed and Angular will produce HTML Rendering Error
                - The Single Model object as FormModel will never be generated and hence "Model-Speicic-Validations" won't bt processed ot executed by the COmponent    
        - Using Reactive Forms
            - @angular/forms
                - ReactiveFormsModule
                    - FormGroup
                        - This represents a <form> tag with HTML editable elements inside it.
                        - Technically this is a 'formsCollection'
                            - formCollection, is a collection of all editable elements applied with 'formControlName' attribute (replacement of 'name' attribute of HTML element)
                        - Each element of the formCollection is executed by Angular using 'FormControl' class
                            - The FormControl class is a mapping between 'public property of Model class' with the HTML element applied with formControlName attribute     
                        - <PUBLIC-PROPERTY-OF-MODEL-CLASS> ---> 'string key' --> applied on HTML element using 'formContrlName'
                            - e.g.
                                - ProductRowId ---> 'ProductRowId' -->
                                    <input type="text" formControlName='ProductRowId'>
                            - The FormControl also allows to define validation rules directly on the Model class proeprty
                    - FormGroup is applied on <form> tag using [formGroup] attribute directive 
                    - formControlName is also an attribute directive used to map model class property with HTML elemeng alon with validation   
                    - Validators class
                        - Class that contains static methods for Model Property Vaidations
                        - required(AbstractControl), requiredTrue(AbstractControl)
                        - max(number) / min(number)
                        - maxLength(number) / minLength(number)
                        - pattern(string|RegEx)
                        - email(AbstractControl)
                        - compose([<ARRAY-OF-VALIDATION-RULES>])
                    - AbstractControl, the base class for FormControl, FormGroup, etc.
                        - If a method accepts AbstractCOntrol as input parameter for validations, then the control on which 'formControlName' is applied, the value fo this control will be immediately invoked by the Validator Mathod      
                    - FormGroup
                        - the 'value' property that represents data posted on ngSubmit event    
                        - the 'setValue()' method to set the data to be shown in all formCOntrols of the FomrGroup
                    - FromControl
                        - the 'value' property, representing value entered in individual formControlName
                        - the 'setValue()' method to set valud for individual formControl   
                    - Validation Evaluation Hierarchy
                        - <formGroup>.controls.<formControlName>.dirty
                            - The element is changed with focus and value entered in it
                        - <formGroup>.controls.<formControlName>.valid | <formGroup>.controls.<formControlName>.invalid
                            - Eveluate th value for validation
                        - <formGroup>.controls.<formControlName>.errors.<VALIDATION-RULE-FAILED>
                            - VALIDATION-RULE-FAILED
                                - required, minlength, maxlength, pattern, min, max, custom
# Creating a Custom Directive
    - Decide the Bevaior of the Directive
        - Component Directive
        - Attribute Directive
            -  a custom attribute applied on existing HTML element to provide or apply value added custom behavior
            - Planning
                - Business Logic for the behavior
                - What data will be accpted by the directive?
                    - Used to define @Input() decorated property
                        - A custom directive may have multiple input decorated properties
                - When will this directive be activated?
                    - An event for directive activation
                    - @HostListener() decorator from @angular/core
                        - Map a method of the custom directive to HTML Element's Event  
                        - E.g.
                            - @HostListener('mouseove') applyColor(){}
                            - The applyColor() method will be executed on 'MouseMove' event on the HTML element where the directive is applied    
                - The TargetElement Reference and its expected rendering when the directive is activated  
                    - ElementRef class from @angular/core is used to target the execution of HTML element on which the directive is applied
                    - Renderer2 class from @angular/core is used to define the rendering after the directive is executed       
                - ElementRef and Renderer2, these classes are ctor injected custom directive class
                    - these are resolved by using the 'BrowserModule' loased by @NgModule
                - Directive class must be applied with @Directive Decorator from @angular/core
                    - This contains the 'selector' property that defines the selector which will be used as custom attribute directive
                        - @Directive ({ selector: '[setColor]' })
                            - [setColor] is selector name, since it is enclosed on [], t will be used thriugh property-binding
                    - Register the directive in 'declrations:[]' array of the @NgModule  
                    - apply the directive on HTML element of the component     

# Angular with Application Development using Services
1. Creating a Simple Angular Service as Utility
    - Class decorated with @Injectable decorator from @angular/core
2. Use Angular Service to establish dis-connected communition across components
    - Kind of Publish-Subscribe Notifications
    - Components wil talk to each other by shring data w/o any relationship across them
3. Angular Services for HTTP Calls
    - @angular/common/http packages
        - HttpClinetModule class
            - Platform to manage HTTP Communication from Angular Angular
            - HttpClient class
                - Injected into the Angular Service class as ctor() injection
                - This is resolved by the HttpClientModule class which is imported in the 'imports:[]' array of NgModule     
            - Methods of HttpClient class
                - get<T>(), post<T>(), put<T>(), delete<T>(),patch<T>()
                    - T is the expected respone from the service class as
                        - Observable<T>    
                - HttpCLient support HTTP/2
                    - Supports
                        - Text, HTML, XML, JSON (from Http/1.x)
                        - Buffers aka ArrayBuffer
                        - Blob
``` javascript
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./../models/app.product.model";

@Injectable({
    providedIn:'root'
})
export class HttpService {
    constructor(private http:HttpClient){}
    private url:string = 'https://apiapptrainingnewapp.azurewebsites.net/api/products';

    getData(): Observable<Product[]> {
        let response:Observable<Product[]>;
        response = this.http.get<Product[]>(this.url);
        return response;
    }

    getDataById(id:number): Observable<Product> {
        let response:Observable<Product>;
        response = this.http.get<Product>(`${this.url}/${id}`);
        return response;
    }
    postData(prd:Product):Observable<Product> {
        let response:Observable<Product>;
        response = this.http.post<Product>(`${this.url}`, prd, {
            headers: new HttpHeaders({'Content-Type':'application/json'})
        });
        return response;
    }

    putData(id:number, prd:Product):Observable<Product> {
        let response:Observable<Product>;
        const options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
        };
        response = this.http.put<Product>(`${this.url}/${id}`, prd,  options);
        return response;
    }

    deleteData(id:number): Observable<Product> {
        let response:Observable<Product>;
        response = this.http.delete<Product>(`${this.url}/${id}`);
        return response;
    }
} 
```

# Angular Elements
1. install @angular/elements
    - npm install --save @angular/elements@<Version>
2. The Component to be exposed as element need not to have selector because the selector will be created using code.
3. Register the Component as CUSTOM ELEMENT using following steps in @NgModule
    - import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
        -  Injector
            - used to inject the Angular Component as Custom Element
        -  CUSTOM_ELEMENTS_SCHEMA
            - object used by angular to define an execution for the WebComponent or anyn other WebComponent library (e.g. LitElement) in Angular Application as a child of any component      
    import { createCustomElement } from "@angular/elements";
        -  createCustomElement
            - used to register the Component in Custom Element Regisry of the browser          

# LitElements
npm install --save lit-element @webcomponents/custom-elements @webcomponents/webcomponentsjs document-register-element lit-html
1. @webcomponents/custom-elements: indicates that the project supports custom elements for UI
2. @webcomponents/webcomponentsjs , the pacakge that provide Shadow-DOM execution for the element in Angukar application
3. lit-element, provides an access to LitElement, the base class for creating LitElement
4. document-register-element, the packe included in Angular Build to inform it that the Angular app uses LitElement for Rendering so support Propeties and Events
5.  lit-html, the HTML template under the Shodow DOM 


# Hands-on Lab
# Date : 19-May-2021
1. Create a 'Angular Calculator' looks like the WIndows Calculator with scientific Features (Mandatory)
2. Generate HTML xTable based on the Complex Array using *ngFor (optional)
    - Heades and Rows must be generated dynamically

# Dae: 20-May-2021
1. CReate a GridComponetn using HTML Table with FOllowing needs
    - All Columns and Rows MUST be dunamically generated
    - The Component must have 'canDelete' property, if this is set to true, each row of the table should generate delete button. When this button is clicked the row must be removed from Collection of the parent component
    - Each column must have 'sort' and 'reverse' button (use Bootstarp classed to show Arrow buttons)
        - sort / reverse the table columns based on click on these buttons  

# Date 21-May-2021
1. Complete the ProductCOmponet for Validating all propertes as
    - All ENtries are Mandatory
    - ProductName must be String starts from UpperCase Character
    -  BAsePrice must be +ve integer
2. Create a custom valiadtor that will make sure that the ProductId is unique. If End-user truen ti enter duplicate value generate an errior message
3. As an extension of Task 2, create a custom directive that will change border color of the ProductId textbox if the ProductId is repeated    

# Date 24-May-2021
1. Complete the ProductFormComponent by using the Http Services for CRUD Operations.
2. Experience Parallel Calls using forkJoin () from rxjs
https://www.devcurry.com/2019/11/parallel-http-calls-from-angular.html
3. https://www.dotnetcurry.com/angularjs/1445/angular-services-component-communication

# Date 25-May-2021

1. Create a Mult-Column List using LitElements (No Drop Down)


