import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component'; 
import { DetailsComponent } from './pages/details/details.component';
import { CoffeeItemComponent } from './home/coffee-item/coffee-item.component';
import { DirectivesExamplesComponent } from './pages/directives-examples/directives-examples.component';

import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectListingComponent } from './pages/project-listing/project-listing.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'coffee-details', component: CoffeeItemComponent },
  { path: 'coffee/:id', component: DetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: ProjectListingComponent },
  { path: 'directives-examples', component: DirectivesExamplesComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent },
  { path: 'projects', component: ProjectListingComponent },
  { path: 'project', component: ProjectDetailsComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
