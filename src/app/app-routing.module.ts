import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-homepage',    component: HomepageComponent , canActivate: [AuthGuard]},
  { path: '',    redirectTo: 'app-homepage', pathMatch: 'full'  , canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
