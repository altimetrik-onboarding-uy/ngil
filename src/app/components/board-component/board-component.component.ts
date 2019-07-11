import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TabsService} from '../../services/tabs.service';
import {CardComponentComponent} from '../card-component/card-component.component';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.css']
})
export class BoardComponentComponent implements OnInit {

  tabs      = this.tab.tabs;
  tabTitle  = '';
  selected = new FormControl(0);
  constructor(private tab: TabsService, public dialog: MatDialog) {
  }

  //Delete tab
  removeTab(index: number) {
    console.log(`remove log ${index}`);
    this.tabs.splice(index, 1);
  }

  ngOnInit() {

  }

  //Open Dialog
  openDialog(tab): void {
    console.log(`Im the index ${tab}`);
    console.table(tab.id);
    const dialogRef = this.dialog.open(CardDialogComponent, {
      width: '250',
      data:  {tabId: tab.id , cardTitle: '', cardDesc: '' },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.tabTitle = result;
      console.log(`Result ${result}`);
      // tslint:disable-next-line:triple-equals
      if (result != 'undefined' || result != '') {
        this.tab.addCard(result, tab.id);
      }

    });
  }

}
