import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/create/users.component';
import { UsersDetailComponent } from './components/users/detail/users-detail.component';
import { UsersEditComponent } from './components/users/edit/users-edit.component';
import { UsersListComponent } from './components/users/list/users-list.component';
import { ErrorComponent } from './components/error/error.component';
import { Error401Component } from './components/error-401/error-401.component';
import { MapComponent } from './components/map/map.component';
import { ComercioListComponent } from './components/comercio/list/comercio-list.component';
import { ComercioComponent } from './components/comercio/create/comercio.component';
import { ComercioDetailComponent } from './components/comercio/detail/comercio-detail.component';
import { ComercioEditComponent } from './components/comercio/edit/comercio-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    UsersDetailComponent,
    UsersEditComponent,
    UsersListComponent,
    ComercioListComponent,
    ComercioComponent,
    ComercioDetailComponent,
    ComercioEditComponent,
    MapComponent,
    ErrorComponent,
    Error401Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
