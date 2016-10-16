import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TypComponent } from './typ/typ.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'typ', component: TypComponent }
];

export const routing = RouterModule.forRoot(routes);
