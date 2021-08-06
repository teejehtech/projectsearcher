import { AssignmentPage } from './../assignment/assignment.page';
import { ProjectTopicsPage } from './../project-topics/project-topics.page';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServerService } from '../server.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  ProjectTopic
  Assignment

  constructor(
    private route: Router,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private storage: Storage,

  ) { }

  ngOnInit() {
  }

}
