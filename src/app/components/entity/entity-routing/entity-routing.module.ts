import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntityDetailsComponent } from '../entity-details/entity-details.component';

import { EntityComponent } from '../entity.component';
import { EntityListComponent } from '../entity-list/entity-list.component';
const appRoutes: Routes = [
  {
    path: 'entity', component: EntityComponent, data: { 'gi': 'dd' },
    children: [
      { path: 'entityDetail', component: EntityDetailsComponent },
      { path: 'entityList', component: EntityListComponent ,pathMatch:'full'},
      { path: 'redirectMe', redirectTo: 'entityDetail', pathMatch: 'full' },
      { path: 'redirect', redirectTo: 'entityDetail', pathMatch: 'ful' }
     /* {
        path: '**',
	      redirectTo: 'entityDetail',
	      pathMatch: 'full'
	    }*/]
  },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class EntityRoutingModule { }