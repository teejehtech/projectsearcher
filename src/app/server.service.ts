import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
  ) { }

  getUserData(data){
    let users = {}
    this.db.collection('Users').doc(data).get().subscribe(user=>{
      if(user.exists){
        users['firstname'] = user.data()['firstname']
        users['lastname'] = user.data()['lastname']
        users['email'] = user.data()['email']
        users['course'] = user.data()['course']
        users['school'] = user.data()['school']
        users['password'] = user.data()['password']
        users['username'] = user.data()['username']
      }
    })
    return [users]
  }
}
