import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabsService} from '../../services/tabs.service';
import {MatDialog} from '@angular/material';
import {DialogComponentComponent} from '../dialog-component/dialog-component.component';
import {isUndefined} from 'util';
import {isEmpty} from 'rxjs/operators';

@Component({
  selector: 'app-title-bar-component',
  templateUrl: './title-bar-component.component.html',
  styleUrls: ['./title-bar-component.component.css']
})

export class TitleBarComponentComponent implements OnInit {
  constructor(private tab: TabsService, public dialog: MatDialog) {

  }
  //spinner
  color = 'accent';
  mode  = 'indeterminate';
  value = 20;
  @Input()title:  string   = 'Click me to edit';
  titleIsClicked: boolean  = false;
  loadSpinner:    boolean  = false;
  tabTitle: string         = '';

  //Open Dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.tabTitle = result;
      console.log(result);
      // tslint:disable-next-line:triple-equals
      if (result != 'undefined' || result != '') {
        this.tab.addTab(this.tabTitle);
      }

    });
  }
  //Change Title Function
   onChangeTitle() {
    this.titleIsClicked = true;
  }
  onSaveTitle(e) {
    this.loadSpinner = true;
    setTimeout(() => {
      this.loadSpinner = false;
      this.titleIsClicked = false;
    } , 1000);


  }
  ngOnInit(): void {

  }



}
