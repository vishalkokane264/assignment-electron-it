import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { createSelector, Store } from '@ngrx/store';
import * as loginSlice from 'src/app/store/login-store';
import { IRLoginUser } from 'src/app/store/login-store';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userDetail: IRLoginUser = {
    avatar: '',
    email: '',
    first_name: '',
    id: 0,
    last_name: '',
  };

  @Output() onLogout: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private readonly store: Store<{}>,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getLoginUser().subscribe((data: any) => {
      this.userDetail.avatar = data[0].avatar;
      this.userDetail.email = data[0].email;
      this.userDetail.first_name = data[0].first_name;
      this.userDetail.id = data[0].id;
      this.userDetail.last_name = data[0].last_name;
    });
  }

  getLoginUser() {
    return this.store.select(
      createSelector(loginSlice.selectFeature, (state) => state.user)
    );
  }

  logOut() {
    this.store.dispatch(loginSlice.setLogOutUser(this.userDetail.id));
    this.sharedService.openSnackBar('Success', 'User Logged out successfully');
    this.router.navigate(['login']);
  }
}
