import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() data: any[];
  @Input() categorie: number;

  filteredData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterData();
  }

  filterData(): void {
    const filteredData = []
    
    let count = 0
    this.data.forEach((item) => {
      if(item.kategorie === this.categorie) {
        filteredData.push(item)
        console.log(count++)
      }
    })

    console.log(filteredData)
    this.filteredData = filteredData;

  }
}
