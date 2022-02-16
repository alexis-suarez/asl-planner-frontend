import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelComponent } from './pages/main-panel/main-panel.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    SingInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
