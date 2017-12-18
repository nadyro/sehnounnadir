import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DiplomasComponent } from './diplomas/diplomas.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DiplomasComponent,
    SkillsComponent,
    ContactComponent,
    ExperiencesComponent,
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
