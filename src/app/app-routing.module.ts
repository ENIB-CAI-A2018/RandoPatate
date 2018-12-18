import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrListComponent} from './gr-list/gr-list.component';
import { GrDetailComponent} from './gr-detail/gr-detail.component';
import { BouffeComponent} from './bouffe/bouffe.component';
import {HomeComponent} from './home/home.component';



const routes: Routes = [
  {path: 'GR', component: GrListComponent},
  {path: 'Nourriture', component:BouffeComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'Grs/:id', component:GrDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
