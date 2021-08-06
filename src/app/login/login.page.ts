import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user
  password
  
  array = [4,'solomon', true, false, {}, []]
  bob = {1: 'doo', tr:'ytr', }
  a = [{
    name: 's',
    last: 't',
  }]


  constructor(
    private server: ServerService,
    private route: Router,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private storage: Storage,
  ) { }

  log(){
    if(this.user && this.password){
      if( this.user.indexOf('@')== -1){
        let users = { user: this.user, password: this.password }
        this.db.collection('Users').doc(this.user).get().subscribe(user=>{
          console.log(users)
          if(user.exists){
            this.auth.signInWithEmailAndPassword(user.data()['email'], user.data()['password']).then(()=>{
              this.storage.set('username', this.user)
              this.route.navigateByUrl('dash/tabs/tab1')
            })
          }
        })
      }else{
        let users = {user: this.user, password: this.password}
        this.auth.signInWithEmailAndPassword(this.user, this.password).then(()=>{
          this.route.navigateByUrl('dash/tabs/tab1')
        })
      }
    }
  }

  ngOnInit() {
  }

}