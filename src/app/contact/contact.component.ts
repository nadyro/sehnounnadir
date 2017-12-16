import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {CONTACTS} from '../mock-contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts = CONTACTS;
  constructor() { }

  ngOnInit() {
  }

}
