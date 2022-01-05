import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/update/update.component';
import { FeedbackComponent } from './feedback/feedback.component';
const routes: Routes = [

  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'addrecord',component:AddRecordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard]},
  {path:'update',component:UpdateComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'feedback',component: FeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
