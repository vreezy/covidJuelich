import { Component, Output } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  ngOnInit() {

  }

  public opened: boolean = false;
 
  public toggleSidebar() {
    this.opened = !this.opened;
  }

  public isNewUrl() {
    if(window.location.hostname === "xn--covid-jlich-zhb.de") {
      return true;
    }
    return false;
  }

}
