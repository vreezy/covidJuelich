import { Component, OnInit, Output } from '@angular/core';
import GSheetReader from 'g-sheets-api';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  constructor() { }

  @Output() data: any[] = [];
  @Output() categories: string[] = [];

  ngOnInit() {
    this.getData("1ercM9YmdevykM-jjly6WqIqhJSowH55UEHDSXx-hFUk");
    this.getData("19uLovFswFxFzV54mkCUhfvZ_oPzgqEomhJ39Xuv_1iw");    
  }
  
  getData(id: string): void {

    // test data 1Zq_ogpWQ1CKCtjEt3lowr3JMnmVz4UGpLm4djt1hUe0
    // alt 1KQ-Ii2C16PUdd3e0Olhb2RQgvKPfA4oIbx4UrBAViw8
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
