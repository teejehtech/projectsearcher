import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  Email
  RetypeEmail
  State
  Password
  RetypePassword
  FirstName
  LastName
  Username
  School
  gender
  Faculty
  Department

  constructor(
    private server: ServerService,
    private route: Router,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private storage: Storage,
  ) { }



  log(){
    console.log(this.gender);
    if(this.gender && this.Username && this.Department && this.Password && this.Email && this.Faculty && this.State && this.FirstName && this.LastName && this.School){
      if(this.Password == this.RetypePassword)
      if(this.Email == this.RetypeEmail){
        let Users = {user: this.Username, Email: this.Email, Course: this.State, Password: this.Password, 
          FirstName: this.FirstName, LastName: this.LastName, School: this.School, gender: this.gender,
        }
        this.auth.createUserWithEmailAndPassword(this.Email, this.Password).then(()=>{
          this.db.collection('Users').doc(this.Username).set({
            firstname: this.FirstName,
            lastname: this.LastName,
            email: this.Email,
            course: this.State,
            school: this.School,
            password: this.Password,
            username: this.Username,
            gender: this.gender,
            faculty: this.Faculty,
            department: this.Department,
          }).then(()=>{
            this.storage.set('username', this.Username)
            this.route.navigateByUrl('dash/tabs/tab1')
          })
        })
      }
    }
  }

  ngOnInit() {
   
    
  }

}
