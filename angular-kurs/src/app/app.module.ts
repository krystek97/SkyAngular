import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkyComponent } from './sky/sky.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { TodoworkoutComponent } from './todoworkout/todoworkout.component';
import { SavetaskComponent } from './savetask/savetask.component' ;

@NgModule({
  declarations: [
    AppComponent,
    SkyComponent,
    ChildComponent,
    AddworkoutComponent,
    TodoworkoutComponent,
    SavetaskComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
