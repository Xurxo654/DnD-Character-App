import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdventuringComponent } from './adventuring/adventuring.component';
import { ProficiencyPipe } from './proficiency.pipe';
import { ModPipe } from './mod.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdventuringComponent,
    ProficiencyPipe,
    ModPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
