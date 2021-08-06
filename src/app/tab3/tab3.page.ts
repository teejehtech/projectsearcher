import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    user


  constructor(
    private server: ServerService,
    private route: Router,
    private storage: Storage
  ) {}

}
