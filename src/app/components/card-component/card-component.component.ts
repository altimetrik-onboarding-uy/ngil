import {Component, Input, OnInit} from '@angular/core';
import { BoardComponentComponent} from '../board-component/board-component.component';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {MatDialog} from '@angular/material';
import {TabsService} from '../../services/tabs.service';
import {Card} from '../../models/card';

export interface DialogData {
  name: string;
}



@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  @Input() card: Card;
  cardResult: any[] = [];
  constructor(private tab: TabsService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  editCard(cardId, tabId): void {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      width: '250',
      data:  {cId: cardId, tId: tabId, cardTitle: this.card.title, cardDesc: this.card.description},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cardResult = result;
      // tslint:disable-next-line:triple-equals
      if (result != 'undefined' || result != '') {
        this.tab.editCard(result, cardId, tabId);
      }

    });
  }

  deleteCard(cardId, tabId) {
    this.tab.deleteCard(cardId, tabId);
  }

}
