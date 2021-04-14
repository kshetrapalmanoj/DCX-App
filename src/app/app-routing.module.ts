import { AddDeveloperComponent } from './developers/add-developer/add-developer.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevelopersComponent } from './developers/developers.component';
import { LoginComponent } from './login/login.component';
import { UpdateDeveloperComponent } from './developers/update-developers/update-developer.component';
import { BrowseComponent } from './browse/browse.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { GetDevelopersComponent } from './developers/get-developer/get-developers.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about.html', component: AboutComponent,
    children: [ ]
  },
  { path: 'developers', component: DevelopersComponent,
    children: [
      { path: 'addDeveloper', component: AddDeveloperComponent },
      { path: 'updateDeveloper', component: UpdateDeveloperComponent},
      { path: 'getDeveloper',component: GetDevelopersComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'browse.html', component: BrowseComponent,
    children: [ ]
  },
  { path: 'register.html', component: RegisterComponent},
  { path: 'contact.html', component: ContactComponent,
    children: [ ]
  },
  { path: 'info.html', component: InfoComponent,
    children: [ ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
