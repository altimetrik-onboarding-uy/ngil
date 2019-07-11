import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
const uuid = require('uuid/v1');
@Injectable({
  providedIn: 'root'
})
export class TabsService {
  tabs = [{id: 1, title: 'To Do', cards: [{id: 1, cardTitle: 'Change Title', cardDesc: 'As a User I want the possibility to change the title'}] } , {id: 2, title: 'Doing', cards: [] }];
  private newCard: { id: any, cardDesc: any; cardTitle: any };
  private newTab: { id: any; title: any; cards: any[] };
K
  // tslint:disable-next-line:variable-name
  constructor(private _snackBar: MatSnackBar) {
  }

  getTabs() {
    return this.tabs;
  }


  addTab(tabTitle) {
    if (tabTitle !== '' || tabTitle === undefined) {
      this.newTab = {
        id: uuid(),
        title: tabTitle,
        cards: []
      };
     console.table(this.newTab);
      // @ts-ignore
      this.tabs.push(this.newTab);
      this.openSnackBar(`The tab ${tabTitle} was created successfully`, 'OK');
    } else {
      alert(`The name couldn't be empty`);
    }
  }

  addCard(card, tabId) {
    this.newCard = {
      id: uuid(),
      cardTitle: card[0],
      cardDesc: card[1]
    };
    console.table(this.tabs);
    this.tabs.map( (e) => {
      if (e.id === tabId) {
        e.cards.push(this.newCard);
      }
    });
    console.table(this.tabs);
  }

  editCard(result, cardId, tabId) {
    this.tabs.map( (e) => {
      if (e.id === tabId) {
        e.cards.map(card => {
          if (card.id === cardId) {
            card.cardTitle = result[0];
            card.cardDesc  = result[1];
          // return {...card, cardTitle: result[0], cardDesc: result[1] };
          }
        });
      }
    });

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
