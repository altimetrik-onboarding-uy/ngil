import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TitleBarComponentComponent} from '../title-bar-component/title-bar-component.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {
  tabTitle = '';
  constructor( public dialogRef: MatDialogRef<DialogComponentComponent>) {
  }

  onNoClick(): void {
    this.tabTitle = '';
    this.dialogRef.close();
}
  ngOnInit() {
  }
}
