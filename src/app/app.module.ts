import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InterceptoritemsInterceptor } from './interceptoritems.interceptor';
import { EditaragregaritemComponent } from './editaragregaritem/editaragregaritem.component';
import { HomeComponent } from './home/home.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    EditaragregaritemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  providers: [UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptoritemsInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
