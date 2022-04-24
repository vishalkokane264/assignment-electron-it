import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { createSelector, Store } from '@ngrx/store';
import * as loginSlice from 'src/app/store/login-store';
import * as userSlice from 'src/app/store/user-store';
import { SharedService } from 'src/services/shared.service';
import { IRLoginUser } from 'src/app/store/login-store';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;
  userList: IRLoginUser[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, // private sharedservice: SharedService
    private readonly store: Store<{}>,
    private sharedService: SharedService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
    this.userService.getAllUsers().subscribe((data) => {
      for (let i = 0; i < data.data.length; i += 1) {
        this.store.dispatch(userSlice.addUser(data.data[i]));
      }
    });
    this.userList = [];

    this.fetchAllUsersFromStore().subscribe((data: IRLoginUser[]) => {
      this.userList = data;
      console.log(this.userList);
    });
  }
  fetchAllUsersFromStore() {
    return this.store.select(
      createSelector(userSlice.selectFeature, (state) => state.users)
    );
  }
  onSubmit() {
    let index = this.userList.findIndex(
      (value) =>
        value.email === this.loginForm.value.username &&
        value.email === this.loginForm.value.password
    );
    if (index !== -1) {
      // this.sharedservice.openSnackbar('User logged in successfully', 'green');
      this.store.dispatch(loginSlice.addLoginUser(this.userList[index]));
      this.sharedService.openSnackBar('Success', 'User Logged in successfully');

      this.router.navigate(['home']);
    } else {
      this.sharedService.openSnackBar(
        'failure',
        'Invalid Username or password'
      );
    }
  }
}
