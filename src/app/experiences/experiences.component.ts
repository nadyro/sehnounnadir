import { Component, OnInit } from '@angular/core';
import {Experience} from '../experience';
import {EXPERIENCES} from '../mock-experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences = EXPERIENCES;
  constructor() { }

  ngOnInit() {
  }

}
