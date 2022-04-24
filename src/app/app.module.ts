import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { AuthModule } from './modules/auth.module';
import { UserListingModule } from './modules/user-listing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
// import { IRBlog } from './store/login-store';
import userReducer, { IRUser } from './store/user-store';
import loginReducer, { IRLogin } from './store/login-store';
import { StoreModule } from '@ngrx/store';
import { SharedService } from 'src/services/shared.service';
import { ApiService } from 'src/services/api.service';
import { AddUserComponent } from './dialog/add-user/add-user.component';

export interface IRootState {
  userlist: IRUser;
  logindata: IRLogin;
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./modules/user-listing.module').then((m) => m.UserListingModule),
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AddUserComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('user', userReducer),
    StoreModule.forFeature('login', loginReducer),
    RouterModule,
    RouterModule.forRoot(routes),

    CommonModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    UserListingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [SharedService, ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
