import { Component, OnInit, Output } from '@angular/core';
import GSheetReader from 'g-sheets-api';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  constructor() { }

  title: string = 'corona-juelich';
  @Output() data: any[] = [];
  @Output() categories: string[] = [];

  ngOnInit() {
    this.getData();
  }

  getData(): void {

    // test data 1Zq_ogpWQ1CKCtjEt3lowr3JMnmVz4UGpLm4djt1hUe0
    const options = {
      sheetId: '1KQ-Ii2C16PUdd3e0Olhb2RQgvKPfA4oIbx4UrBAViw8',
      returnAllResults: true,
      // filter: {
      //   'department': 'archaeology'
      // }
    }

    GSheetReader(options, results => {
      this.shuffleArray(results)
      this.data = results;

      // categories
      const categories: string[] = results.map((item) => {
        return item.kategorie;
      })

      categories.sort();
      this.categories =  [...new Set(categories)]; ;
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
