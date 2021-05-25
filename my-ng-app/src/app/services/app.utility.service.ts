import { Injectable } from "@angular/core";

//    providedIn:'root', will make the service instance available
// nacross all components in current moule and components from imported Module 
@Injectable({
    providedIn:'root'
})
export class StringUtiities {
    getLength(str:string):number{
        return str.length;
    }

    changeCase(str:string, c:string):string {
        if(c === 'U') return str.toUpperCase();
        if(c === 'L') return str.toLowerCase();
        return str;
    }
}