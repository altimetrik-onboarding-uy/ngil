import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../card-component/card-component.component';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {
  cardTitle = '';
  cardDesc  = '';
  tabId     = '';
  data: any;

  constructor( public dialogRef: MatDialogRef<CardDialogComponent>,
               // @ts-ignore
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.cardTitle = '';
    this.cardDesc  = '';
    this.tabId     = '';
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
