import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutingProviders, routing} from './routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap';
import { ArtistsexpageComponent } from './artistsexpage/artistsexpage.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsexpageComponent
  ],
  imports: [
    BrowserModule,
      routing,
      ModalModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
