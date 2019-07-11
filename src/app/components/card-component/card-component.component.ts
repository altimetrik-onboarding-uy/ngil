import {Component, Input, OnInit} from '@angular/core';
import { BoardComponentComponent} from '../board-component/board-component.component';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {MatDialog} from '@angular/material';
import {TabsService} from '../../services/tabs.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() tabId: string;
  @Input() cardId: string;
  cardResult: any[] = [];
  constructor(private tab: TabsService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  editCard(cardId, tabId): void {
    console.log(`Im the index ${cardId}`);
    console.log(`Log: ${this.title} and ${this.description}`);
    const dialogRef = this.dialog.open(CardDialogComponent, {
      width: '250',
      data:  {cId: cardId, tId: tabId, cardTitle: this.title, cardDesc: this.description},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cardResult = result;
      console.log(result);
      // tslint:disable-next-line:triple-equals
      if (result != 'undefined' || result != '') {
        console.log(`Result : ${result} - cardId ${cardId} - tabId ${tabId}`);
        this.tab.editCard(result, cardId, tabId);
      }

    });
  }

  deleteCard(cardId, tabId) {
    this.tab.deleteCard(cardId, tabId);
  }

}
