import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from '../home/home.component';
import { EntityComponent} from '../entity/entity.component';
const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  {path:'entiry',component:EntityComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true } )
  ],
  declarations: []
})
export class AppRoutingModule { }