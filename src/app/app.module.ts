import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DemoComponent } from './Components';
import { HomeComponent } from './Components/home/home.component';
import { BackendService } from './Services/backend-service/backend-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
