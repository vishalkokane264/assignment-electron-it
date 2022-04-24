/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { SnackBarComponent } from 'src/app/dialog/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private location: Location, private snackBar: MatSnackBar) {}

  /**
   * @param :- key Value;
   * @description :- set value into localstorage.
   */
  setLocalStorage(key: any, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @param :- key
   * @description :- get value into localstorage.
   */
  getLocalStorage(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  /**
   * @param :- key
   * @description :- get value into localstorage.
   */
  removeLocalStorage(key: any): void {
    localStorage.removeItem(key);
  }

  /**
   * @description :- clear the localstorage.
   */
  clearLocalStorage(): void {
    localStorage.clear();
  }

  /**
   * @description :- Go back to previous page.
   */
  locationBack(): void {
    this.location.back();
  }

  openSnackBar(value: any, msg: string, statusCode?: any): void {
    const durationInSeconds = 2;
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: durationInSeconds * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data: { message: msg, type: value, statusCode },
    });
  }
}
