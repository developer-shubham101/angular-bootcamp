import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DetailsComponent } from './details/details.component';
import { CoffeeItemComponent } from './home/coffee-item/coffee-item.component';
import { DirectivesExamplesComponent } from './directives-examples/directives-examples.component';
import { NGRxExampleComponent } from './ngrx-example/ngrx-example.component';

  const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'coffee-details', component: CoffeeItemComponent },

    { path: 'coffee/:id', component: DetailsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'directives-examples', component: DirectivesExamplesComponent },
    { path: 'ngrx-examples', component: NGRxExampleComponent },
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}