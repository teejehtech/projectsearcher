import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  logout(){
    this.storage.clear().then(()=>{
      this.router.navigateByUrl('home')
    })
  }

  constructor(
    private storage: Storage,
    private router: Router
  ) {}

}
