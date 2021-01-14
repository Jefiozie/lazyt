import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
{ path: 'home', component: HomeComponent },
{ path: '', pathMatch: 'full', redirectTo: 'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
