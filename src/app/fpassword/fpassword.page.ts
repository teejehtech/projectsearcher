import { Router, RouterLinkActive } from '@angular/router';
import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.page.html',
  styleUrls: ['./fpassword.page.scss'],
})
export class FpasswordPage implements OnInit {

  fpassword
  Submit


  log(){
    if(this.fpassword){
      this.auth.sendPasswordResetEmail(this.fpassword).then(()=>{
        this.router.navigateByUrl('home')
      }).catch((e)=>{
        console.log(e);
        
      })
    }
  }
  constructor(
    private server: ServerService,
    private routes: Router,
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
   
  }

}
