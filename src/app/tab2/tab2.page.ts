import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { CardIO } from '@ionic-native/card-io/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  user

  constructor(

    private server: ServerService,
    private route: Router,
    private Storage: Storage,
    
  ) {}

}
