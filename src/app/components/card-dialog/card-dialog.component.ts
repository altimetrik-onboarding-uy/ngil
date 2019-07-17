import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../card-component/card-component.component';
import {Card} from '../../models/card';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {
  card: Card;
  data: any;

  constructor( public dialogRef: MatDialogRef<CardDialogComponent>,
               // @ts-ignore
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.card.title = '';
    this.card.description = '';
    this.card.tabId = '';
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
