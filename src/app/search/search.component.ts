import { Component, OnInit, Output } from '@angular/core';
import GSheetReader from 'g-sheets-api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Output() data: any[] = [];
  @Output() categories: string[] = [];

  ngOnInit(): void {
    this.getData("17I6GPitevZTXHUDOJci1ul_Ra3x14DXfhxyan58XZEE");
  }

  getData(id: string): void {

    const options = {
      sheetId: id,
      returnAllResults: true,
      // filter: {
      //   'department': 'archaeology'
      // }
    }

    GSheetReader(options, results => {
      this.shuffleArray(results)
      this.data = [...this.data, ...results];

      // categories
      const categories: string[] = []
      this.data.forEach((item) => {
        if(item.aktiv === "Ja") {
          categories.push(item.kategorie);
        }
      })

      categories.sort();
      this.categories =  [...new Set(categories)];
      
    });
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

}
