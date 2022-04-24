import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
// import { StoreModule } from '@ngrx/store';
import { UserListingComponent } from '../components/user-listing/user-listing.component';
import { MaterialModule } from './material.module';
const routes: Routes = [
  {
    path: 'user-list',
    component: UserListingComponent,
  },
];

@NgModule({
  declarations: [UserListingComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [UserListingComponent],
  exports: [UserListingComponent],
})
export class UserListingModule {}
