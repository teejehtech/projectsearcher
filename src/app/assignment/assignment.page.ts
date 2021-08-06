import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {


    search
    Result = []

  constructor( 
    private HttpClient: HttpClient
   ) { }

   Search(){
     return this.HttpClient.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA0ac90H31CQDayqOk7DQb7jhoDFvU_V68&cx=78b103f8d55022b03&q=${this.search}`).subscribe(data=>{
       this.Result = [...data['items']] 
     })
   }
 

  ngOnInit() {
    //AIzaSyA0ac90H31CQDayqOk7DQb7jhoDFvU_V68
    
  }

}
