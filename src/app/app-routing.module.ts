import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-homepage',    component: HomepageComponent},
  { path: '',    redirectTo: 'app-homepage', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
