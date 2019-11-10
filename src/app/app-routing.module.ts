import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaceTesterComponent } from './face-tester/face-tester.component';
import { FaceGroupingComponent } from './face-grouping/face-grouping.component';
import { FindSimilarComponent } from './find-similar/find-similar.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'test-faces', component: FaceTesterComponent},
  { path: 'face-grouping', component: FaceGroupingComponent },
  { path: 'find-similar', component: FindSimilarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
