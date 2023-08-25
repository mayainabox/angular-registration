import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TargetPageComponent } from './target-page/target-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'target/:selectedValue', component: TargetPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
