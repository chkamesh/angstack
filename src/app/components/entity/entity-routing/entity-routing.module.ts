import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { EntityDetailsComponent } from '../entity-details/entity-details.component'
import { EntityListComponent } from '../entity-list/entity-list.component'

const entityRoutes: Routes = [
  { path: '/entityDetail', component: EntityDetailsComponent },
  { path: '/entityList', component: EntityListComponent }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class EntityRoutingModule { }