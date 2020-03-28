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

    // vreezy 1Zq_ogpWQ1CKCtjEt3lowr3JMnmVz4UGpLm4djt1hUe0
    const options = {
      sheetId: '1KQ-Ii2C16PUdd3e0Olhb2RQgvKPfA4oIbx4UrBAViw8',
      returnAllResults: true,
      // filter: {
      //   'department': 'archaeology'
      // }
    }

    GSheetReader(options, results => {
      this.data = results;

      // categories
      const categories: string[] = results.map((item) => {
        return item.kategorie;
      })

      // distinct
      this.categories =  [...new Set(categories)]; ;
    });
  }
}
