import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatGridListModule, MatCardModule, MatTabsModule, MatDialogModule, MatDialogRef} from '@angular/material';

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

  ],
})
export class MaterialModule {}
