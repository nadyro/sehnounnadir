import { Component, OnInit } from '@angular/core';
import {Diploma} from '../diplomas';
import {DIPLOMAS} from '../mock-diplomas';

@Component({
  selector: 'app-diplomas',
  templateUrl: './diplomas.component.html',
  styleUrls: ['./diplomas.component.css']
})
export class DiplomasComponent implements OnInit {

  diplomas = DIPLOMAS;
  constructor() { }

  ngOnInit() {
  }

}
