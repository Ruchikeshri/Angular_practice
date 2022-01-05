import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule}  from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import { FeedbackComponent } from './feedback/feedback.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AddRecordComponent,
    UpdateComponent,
    RegisterComponent,
    LoginComponent,
    FeedbackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
