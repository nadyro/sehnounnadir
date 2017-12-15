import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {PROFILES} from '../mock-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  profiles = PROFILES;
  ngOnInit() {
    
  }

}
