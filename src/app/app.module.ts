import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LtmenuComponent } from './ltmenu/ltmenu.component';
import { RtmenuComponent } from './rtmenu/rtmenu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EntityComponent } from './entity/entity.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  { path: '', component: RtmenuComponent, outlet: 'rightmenu' },
  { path: 'entity', component: EntityComponent, data: { 'gi': 'dd' } },
  {
    path: 'home', component: HomeComponent,
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, HelloComponent, HeaderComponent, FooterComponent, LtmenuComponent, RtmenuComponent, HomeComponent, EntityComponent, ErrorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
