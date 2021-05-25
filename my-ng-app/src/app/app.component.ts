 
import { Component } from '@angular/core';


// Component decorator class

@Component({
  selector: 'app-root', // used to refer the component in the HTML Mark-Up as 'Custom HTML tag' to render it
  templateUrl: './app.component.html', // the property that uses the external html file which contains UI for the component. Other property for UI is 'template', the property that contains 'inline HTML', the  UI in current .ts component (Generally avoided)
  styleUrls: ['./app.component.css'] // an array of .css files that copntains CSS for the HTML. The otehr property is 'style' to define inlin CSS. The 'styleUrls' and 'style' will be scopped for the current component only
})
export class AppComponent {
   message: string;
   url: string;
   name: string;
   characters:Array<string>;
   selectedCharacter:string;
   departments:Array<any>;
   seletDept:any;
   toggle:boolean;
   constructor(){
     this.message = 'The Component';
     this.url = 'https://www.dotnetcurry.com';
     this.name ='';
     this.characters = new Array<string>();
     this.characters.push('Vijay');
     this.characters.push('Ajay');
     this.characters.push('Vinod');
     this.characters.push('Amit');
     this.characters.push('Don');
     this.selectedCharacter = '';
     this.departments  =new Array<any>();
     this.departments.push({DeptNo:10,DeptName:'IT'});
     this.departments.push({DeptNo:20,DeptName:'HR'});
     this.departments.push({DeptNo:30,DeptName:'SL'});
     this.departments.push({DeptNo:40,DeptName:'TR'});
     this.seletDept = {};
     this.toggle  =false;
   }
   display():void{
     alert('I am Clicked');
     this.message = 'HAHA HIHI HUHU';
   }

   setToggle():void {
     if(!this.toggle){
       this.toggle = true;
     } else {
       this.toggle = false;
     }
       
   }
}
