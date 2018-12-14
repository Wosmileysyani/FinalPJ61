import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CreateComponent } from './component/create/create.component';
import { HomesavingComponent } from './component/homesaving/homesaving.component';
import { DetailComponent } from './component/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'homesaving', component: HomesavingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/create', component: CreateComponent },
  { path: 'home/edit/:id', component: CreateComponent },
  { path: 'homesaving/datail/:id', component: DetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
