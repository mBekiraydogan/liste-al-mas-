import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { Model } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

displayAll : boolean =false;

model = new Model();
  // addItem(txt:any){
  //   console.log(txt.value);
  // }

  addItem(value:string){
    // console.log(value);
    // this.message=value;  // inputa girilen değeri message göstermek için
    if(value!=""){
      this.model.items.push({ description : value , action: false});
    }else {
      alert("bilgileri giriniz")
    }  
  }

 getName(){
   return this.model.name;
 }
 getItems(){
   if(this.displayAll){
    return this.model.items
   }
   return this.model.items.filter(item => !item.action)
 }

displayCount(){
  return this.model.items.filter(i => i.action).length
}

}
