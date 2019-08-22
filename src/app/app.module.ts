import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LtmenuComponent } from './components/ltmenu/ltmenu.component';
import { RtmenuComponent } from './components/rtmenu/rtmenu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EntityComponent } from './components/entity/entity.component';
import { ErrorComponent } from './components/error/error.component';
import { EntityService } from './services/entity.service';
import { SampleDirective } from './directives/sample.directive';
import { SamplePipe } from './pipes/sample.pipe';

import {ReactiveFormsModule, FormGroup} from '@angular/forms';
import { EntityDetailsComponent } from './components/entity/entity-details/entity-details.component';
import { EntityListComponent } from './components/entity/entity-list/entity-list.component';
const appRoutes: Routes = [
  { path: '', component: RtmenuComponent, outlet: 'rightmenu' },
  { path: 'entity', component: EntityComponent, data: { 'gi': 'dd' } },
  {
    path: 'home', component: HomeComponent,
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, HelloComponent, HeaderComponent, FooterComponent, LtmenuComponent, RtmenuComponent, HomeComponent, EntityComponent, ErrorComponent, SampleDirective, SamplePipe, EntityDetailsComponent, EntityListComponent],
  bootstrap: [AppComponent],
  providers: [EntityService]
})
export class AppModule { }
