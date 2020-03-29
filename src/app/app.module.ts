import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ElementComponent } from './element/element.component';
import { MenuComponent } from './menu/menu.component';
import { DealsComponent } from './deals/deals.component';
import { InformationComponent } from './information/information.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SearchElementComponent } from './search-element/search-element.component';

const appRoutes: Routes = [
  { path: '',               component: DealsComponent },
  { path: 'search',         component: SearchComponent },
  { path: 'information',    component: InformationComponent },
  { path: 'register',         component: RegisterComponent },
  { path: 'impressum',         component: ImpressumComponent },
  
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    MenuComponent,
    DealsComponent,
    ImpressumComponent,
    InformationComponent,
    RegisterComponent,
    SearchComponent,
    SearchElementComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
      {useHash: true}
    ),
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
