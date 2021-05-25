import { LitElement, customElement, html, property, css } from "lit-element";


// customElement, an ES 7 Decorator that makes the class as the Custom HTML Element
// to be registered inside the CustomElementRegistry of teh browser
//  LitElement, the base class that will offer a UI (HTML) and behavior (properties and Events)
// so that it will be executed in the browser

// html, the HTML template thatb will be manipulated inside the Shadow DOM 
// property, the decorator used to define property system for the LitELement
// css, style to be applied on lit element

// use the fetch() object

@customElement('simple-element')
export class SimpleLitElement extends LitElement {

     [x:string]:any;

    // define properties, these will be used by Angular app to pass data as Propewrty Binding
    @property({type:String}) inputMessage;
    @property({type:Array}) list;
    @property({type:Array}) columnHeaders;

    

    // defining properties using properties readonly property
    static get properties(){
        return {
            fname: {type:String},
            lname: {type:String}
        }
    }

    // define CSS using css and styles() read-only property
    // set red as backgound color for all input elements
    static get styles(){
        return css `
        div {
                background-color: 'red';
                color:'yellow';
            }`;
    }


    constructor(){
        super();
        this.inputMessage  ='';
        this.list = new Array<any>();
        this.columnHeaders = new Array<any>();
        this.fname = '';
        this.lname = '';
    }

    clickMe():void {
       // define a custom event using which the LitElemtn will pass data to parent component
       const litEvent = new CustomEvent('lit-click',{
           detail:{
               data: this.inputMessage.toUpperCase()
           },
           bubbles:true // keep bubbling upword to the DOM Tree till parent does not subscribe to it
       });
       // dispatch the event
       this.dispatchEvent(litEvent);
    }


    render(){
        return html `<div> 
               <strong> The Simple Element </strong>
               <span> ${this.inputMessage} </span> 
               <hr/>
               <ul>
                 ${this.list.map((d)=>
                    html `<li>${d.ProductName}</li>`)}
               </ul>  

               <table>
                    <thead>
                        ${this.columnHeaders.map((d)=>
                            html `<th>${d}</th>`)}
                    </thead>
                    <tbody>
                    ${this.list.map((p)=>
                        html `<tr>${this.columnHeaders.map((h)=>
                            html `<simple-child-element products=p columnHeader=h>`)}
                        </tr>`)}
                    </tbody>
               </table>
               <hr/>
                <strong> First Name ${this.fname} && Last Name ${this.lname}   </strong> 
               <hr/>
               <input type="button" value="Click Me" @click=${this.clickMe}/>
            </div>
        `;
    }
}