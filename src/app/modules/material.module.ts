import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatListModule } from '@angular/material/list';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  CommonModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MatSliderModule,
  MatCardModule,
  MatCheckboxModule,
  MatSelectModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatIconModule,
  MatTabsModule,
  MatChipsModule,
  MatRadioModule,
  MatTooltipModule,
  MatTabsModule,
  MatDividerModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTableModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  CdkScrollableModule,
  MatListModule,
  MatSortModule,
  MatAutocompleteModule,
  MatSidenavModule,
  MatTreeModule,
  CdkTreeModule,
  OverlayModule,
  DragDropModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules,
  providers: [MatDatepickerModule],
})
export class MaterialModule {
  constructor() {
    console.log('module import done');
  }
}
