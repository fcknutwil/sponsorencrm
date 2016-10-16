import { RouterModule, Routes } from '@angular/router';

import { TypComponent } from './typ/typ.component';


const routes: Routes = [
  { path: '', redirectTo: '/typ', pathMatch: 'full'},
  { path: 'typ', component: TypComponent }
];

export const routing = RouterModule.forRoot(routes);
