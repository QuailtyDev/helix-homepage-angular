import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

import { HOME, LOGIN } from './constants/navigation-paths';

export const routes: Routes = [
  { path: '', redirectTo: HOME, pathMatch: 'full' },
  { path: HOME, component: HomeComponent },
  {
    path: LOGIN,
    loadChildren: () => import('./components/pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
