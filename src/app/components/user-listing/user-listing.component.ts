import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createSelector, Store } from '@ngrx/store';
import { AddUserComponent } from 'src/app/dialog/add-user/add-user.component';
import { IRLoginUser } from 'src/app/store/login-store';
import * as userSlice from 'src/app/store/user-store';
import { SharedService } from 'src/services/shared.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
})
export class UserListingComponent implements OnInit {
  userList: IRLoginUser[] = [];
  displayedColumns: string[] = [
    'id',
    'avatar',
    'email',
    'first_name',
    'last_name',
    'action',
  ];

  constructor(
    private readonly store: Store<{}>,
    private userService: UserService,
    private sharedService: SharedService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      for (let i = 0; i < data.data.length; i += 1) {
        this.store.dispatch(userSlice.addUser(data.data[i]));
      }
    });
    this.getAllUsers();
  }

  getAllUsers() {
    this.fetchAllUsersFromStore().subscribe((data: IRLoginUser[]) => {
      this.userList = data;
    });
  }

  fetchAllUsersFromStore() {
    return this.store.select(
      createSelector(userSlice.selectFeature, (state) => state.users)
    );
  }

  deleteUser(user: IRLoginUser) {
    this.store.dispatch(userSlice.deleteUser(user.id));
    this.userService.deleteUser(user.id).subscribe((data) => {
      this.sharedService.openSnackBar('Success', 'User deleted successfully');
    });
    this.getAllUsers();
  }
  addUser(data: any) {
    this.userService.addUser(data).subscribe(
      (data) => {
        this.sharedService.openSnackBar('Success', 'User Added Successfully');
        this.getAllUsers();
      },
      (error) => {
        this.sharedService.openSnackBar(
          'Failure',
          'User Not Added Successfully'
        );
      }
    );
  }
  addNewUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialog.closeAll();
        const obj: IRLoginUser = {
          id: Math.floor(Math.random()),
          first_name: result.value.first_name,
          last_name: result.value.last_name,
          email: result.value.email,
          avatar: result.value.avatar,
        };
        this.addUser(obj);
      }
    });
  }
}
