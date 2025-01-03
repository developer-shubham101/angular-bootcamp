import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { CoffeeItemComponent } from './home/coffee-item/coffee-item.component';
import { DirectivesExamplesComponent } from './pages/directives-examples/directives-examples.component';

import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectListingComponent } from './pages/project-listing/project-listing.component';
import { AuthComponent } from './pages/auth/auth.component';
import { authGuardFn } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', component: AuthComponent }, // Default route
  {
    path: 'coffee-details',
    component: CoffeeItemComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'coffee/:id',
    component: DetailsComponent,
    canActivate: [authGuardFn],
  },
  { path: 'about', component: AboutComponent, canActivate: [authGuardFn] },
  { path: 'contact', component: ContactComponent, canActivate: [authGuardFn] },
  {
    path: 'portfolio',
    component: ProjectListingComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'directives-examples',
    component: DirectivesExamplesComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'companies',
    component: CompanyListComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'companies/:id',
    component: CompanyDetailsComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'projects',
    component: ProjectListingComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'project',
    component: ProjectDetailsComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent,
    canActivate: [authGuardFn],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
