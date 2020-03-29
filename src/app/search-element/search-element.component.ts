import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  styleUrls: ['./search-element.component.scss']
})
export class SearchElementComponent implements OnInit {
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
      if(item.kategorie === this.categorie && item.aktiv === "Ja") {
        filteredData.push(item)
        console.log(count++)
      }
    })

    console.log(filteredData)
    this.filteredData = filteredData;
  }

  cleanNumber(number: string): string {
    let newNumber = number.replace(/\s/g, "")
    newNumber = newNumber.replace(/\D/g,'');

    if(newNumber.substring(0, 1) === "0") {
      newNumber = "49" + newNumber.substr(1);
    }
    return newNumber;
  }

}
