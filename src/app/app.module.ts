import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LtmenuComponent } from './ltmenu/ltmenu.component';
import { RtmenuComponent } from './rtmenu/rtmenu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, LtmenuComponent, RtmenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
