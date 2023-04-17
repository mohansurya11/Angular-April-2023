import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DialogFormComponent } from './pages/dialog-form/dialog-form.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dialog-form", component: DialogFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
