import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponentComponent } from './components/title-bar-component/title-bar-component.component';
import { ColumnComoponentComponent } from './components/column-comoponent/column-comoponent.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { DescriptionComponentComponent } from './components/description-component/description-component.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {MatButtonToggleModule, MatIconModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { BoardComponentComponent } from './components/board-component/board-component.component';
import { DialogComponentComponent } from './components/dialog-component/dialog-component.component';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponentComponent,
    ColumnComoponentComponent,
    CardComponentComponent,
    DescriptionComponentComponent,
    BoardComponentComponent,
    DialogComponentComponent,
    CardDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonToggleModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponentComponent, CardDialogComponent]
})
export class AppModule { }
