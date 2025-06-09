import { Routes } from '@angular/router';
import { RequirementDetailComponent } from './requirement-detail/requirement-detail.component';

export const routes: Routes = [
  { path: 'requirement-data/:id', component: RequirementDetailComponent }/*,
  { path: '', redirectTo: '/', pathMatch: 'full' }*/
];
