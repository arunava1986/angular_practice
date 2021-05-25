import { Directive,ElementRef, Renderer2, Input, HostListener } from "@angular/core";

// <input type="button" [setColor]="<PROPERTY>"/>

@Directive({
    selector: '[setColor]'
})
export class ColorDirective {
  constructor(private ele:ElementRef, private renderer:Renderer2){}
  // the input decorated property is mapped with 'selector' so that when the
  // property's value is changed the directive is  activated
  @Input('setColor') setColor:string= '';

  // method for logic
    private applyColor(color:string):void {
        // defining a new renderingn of the HTML element by applying
        // the backgroundColor style
         this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', color );   
    }

  // method for hosting an event so that the directive will be activated

   @HostListener("mouseenter")
   onMouseEnter(){
       this.applyColor(this.setColor);
   }
   @HostListener("mouseleave")
   onMouseLeave(){
       this.applyColor('');
   }
}