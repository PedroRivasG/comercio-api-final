import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComercioComponent } from './components/comercio/create/comercio.component';
import { ComercioDetailComponent } from './components/comercio/detail/comercio-detail.component';
import { ComercioEditComponent } from './components/comercio/edit/comercio-edit.component';
import { ComercioListComponent } from './components/comercio/list/comercio-list.component';
import { Error401Component } from './components/error-401/error-401.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { UsersComponent } from './components/users/create/users.component';
import { UsersDetailComponent } from './components/users/detail/users-detail.component';
import { UsersEditComponent } from './components/users/edit/users-edit.component';
import { UsersListComponent } from './components/users/list/users-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: UsersComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'users', component: UsersListComponent, pathMatch: 'full' },
  { path: 'users/:id', component: UsersDetailComponent, pathMatch: 'full' },
  { path: 'users/edit/:id', component: UsersEditComponent, pathMatch: 'full' },

  { path: 'comercios', component: ComercioListComponent, pathMatch: 'full' },
  { path: 'comercios/crear', component: ComercioComponent, pathMatch: 'full' },
  {
    path: 'comercios/:id',
    component: ComercioDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'comercios/edit/:id',
    component: ComercioEditComponent,
    pathMatch: 'full',
  },
  {
    path: 'comercios/map/:id',
    component: MapComponent,
    pathMatch: 'full',
  },

  { path: 'maps', component: MapComponent, pathMatch: 'full' },

  { path: 'error', component: ErrorComponent, pathMatch: 'full' },
  {
    path: 'error/unauthorized',
    component: Error401Component,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
