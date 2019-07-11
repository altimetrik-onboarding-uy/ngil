import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatGridListModule, MatCardModule, MatTabsModule, MatDialogModule, MatSnackBarModule} from '@angular/material';

import {NgModule} from '@angular/core';

@NgModule ({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule

  ],
})
export class MaterialModule {}
