import { Component, HostListener } from '@angular/core';
import { NameApiService } from './services/name-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _Service:NameApiService){

  }

  @HostListener("document:keypress",["$event"])
  KeyBoarEvent(event){
    if(event.code!="Space")return
    this.getData();
  }







  getData(){

    this._Service.getDatas().subscribe(data=>{
      console.log(data)
    })

  }







}
