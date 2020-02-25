import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Chara-";
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  a = 0.234;
  salary = 1234.5;
  hero = {
    name: 'Logan',
    nickname: 'Wolverine',
    age: 500,
    address:{
      city: 'NY',
      home: 'Walk street'
    }
  };
  promiseValue = new Promise( (resolve , reject)=>{
    setTimeout( ()=> resolve('Data arrive!!'),3500 );
  });
  date = new Date();

  name2 = 'jUan Carlos ChaRa LopeZ'

}
