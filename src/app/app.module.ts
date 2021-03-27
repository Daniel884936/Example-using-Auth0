//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricesComponent } from './components/prices/prices.component';

//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';

//enviroement
import {environment as env} from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProtectedComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
