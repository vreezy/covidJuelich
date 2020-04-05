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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './loading/loading.component';
import { ContactComponent } from './contact/contact.component';




const appRoutes: Routes = [
  { path: '',              component: DealsComponent },
  { path: 'offer',         component: DealsComponent },
  { path: 'search',        component: SearchComponent },
  { path: 'information',   component: InformationComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'contact',       component: ContactComponent },
  { path: 'impressum',     component: ImpressumComponent },
  
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
    SearchElementComponent,
    LoadingComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
      {useHash: true}
    ),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
