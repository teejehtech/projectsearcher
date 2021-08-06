import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  user = []

  constructor(
    private server: ServerService,
    private storage: Storage,
  ) {}

  ngOnInit() {
    this.storage.get('username').then(data=>{
      this.user = [...this.server.getUserData(data)]
      
    })
  }
}
