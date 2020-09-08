import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AddRestComponent } from "./add-rest/add-rest.component";
import { ListRestComponent } from "./list-rest/list-rest.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UpdateRestComponent } from "./update-rest/update-rest.component";
const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"list_rest",pathMatch:"full",component:ListRestComponent},
  {path:"add_rest",pathMatch:"full",component:AddRestComponent},
  {path:"login",pathMatch:"full",component:LoginComponent},
  {path:"resgiter",pathMatch:"full",component:RegisterComponent},
  {path:"update_rest/:id",pathMatch:"full",component:UpdateRestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
