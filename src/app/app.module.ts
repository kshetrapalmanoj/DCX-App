import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevelopersComponent } from './developers/developers.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AddDeveloperComponent } from './developers/add-developer/add-developer.component';
import { UpdateDeveloperComponent } from './developers/update-developers/update-developer.component';
import { DeleteDeveloperComponent } from './developers/delete-developer/delete-developer.component';
import { GetDevelopersComponent } from './developers/get-developer/get-developers.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTableModule} from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DevelopersComponent,
    LoginComponent,
    AddDeveloperComponent,
    UpdateDeveloperComponent,
    DeleteDeveloperComponent,
    GetDevelopersComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
