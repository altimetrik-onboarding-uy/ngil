import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Card} from '../models/card';
import {Tab} from '../models/tab';

// Unique ID function
// @ts-ignore
const uuid = require('uuid/v1');

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  // tslint:disable-next-line:max-line-length
  // tabs = [{id: 1, title: 'To Do', cards: [{id: 1, cardTitle: 'Change Title', cardDesc: 'As a User I want the possibility to change the title'}] } , {id: 2, title: 'Doing', cards: [] }];
  private newCard: Card;
  private newTab: Tab;
  public tabs = [];
  // tslint:disable-next-line:variable-name
  constructor(private _snackBar: MatSnackBar) {
  }
// Add a tab to an Array
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
// Add a card to a tab
  addCard(card: string, tabId: string) {
    this.newCard = {
      cardId: uuid(),
      title: card[0],
      description: card[1],
      tabId: tabId
    };
    console.table(this.tabs);
    this.tabs.map( (e) => {
      if (e.id === tabId) {
        e.cards.push(this.newCard);
      }
    });
    console.table(this.tabs);
  }
// Edit a card by tabId and  cardId
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
// Delete a card by tabId and cardId
  deleteCard(cardId, tabId) {
    this.tabs.map( e => {
      if (e.id === tabId) {
        e.cards.map( card => {
          if (card.id === cardId) {
            const cardIndex = e.cards.indexOf(card);
            e.cards.splice(cardIndex, 1);
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
