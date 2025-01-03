import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { CoffeeItemComponent } from './home/coffee-item/coffee-item.component';
import { DirectivesExamplesComponent } from './pages/directives-examples/directives-examples.component';
import { HighlightDirective } from './pages/directives-examples/highlight.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { CompanyEffects } from './store/effects/company.effects';
import { companyReducer } from './store/reducers/company.reducer';
import { ProjectItemComponent } from './component/project-item/project-item.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { projectReducer } from './store/reducers/project.reducer';
import { ProjectEffects } from './store/effects/project.effects';
import { ProjectListingComponent } from './pages/project-listing/project-listing.component';
import { TagInputModule } from 'ngx-chips'; // Import NgxChipsModule
import { AuthModule, provideAuth0 } from '@auth0/auth0-angular';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthInterceptor } from './interceptors/auth.service';
import { environment } from '../environments/environment';
import { technologyReducer } from './store/reducers/technology.reducer';
import { TechnologyEffects } from './store/effects/technology.effects';
import { provideAnimations } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AuthComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DetailsComponent,
    CoffeeItemComponent,
    DirectivesExamplesComponent,
    HighlightDirective,
    CompanyListComponent,
    CompanyDetailsComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    ProjectListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TagInputModule, // Add NgxChipsModule to imports
    StoreModule.forRoot({
      companies: companyReducer,
      project: projectReducer,
      technology: technologyReducer,
    }),
    EffectsModule.forRoot([CompanyEffects, ProjectEffects, TechnologyEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
  ],
  providers: [
    provideAuth0({
      domain: environment.domain,
      clientId: environment.clientId,
      authorizationParams: {
        audience: environment.audience,
        redirect_uri: window.location.origin,
      },
    }),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
