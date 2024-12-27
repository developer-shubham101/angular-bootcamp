import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DetailsComponent } from './details/details.component';
import { CoffeeItemComponent } from './home/coffee-item/coffee-item.component';
import { DirectivesExamplesComponent } from './directives-examples/directives-examples.component';
import { HighlightDirective } from './directives-examples/highlight.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { itemReducer } from './store/reducers/item.reducer';
import { ItemEffects } from './store/effects/item.effects';
import { NGRxExampleComponent } from './ngrx-example/ngrx-example.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    DetailsComponent,
    CoffeeItemComponent,
    DirectivesExamplesComponent,
    HighlightDirective,
    NGRxExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    StoreModule.forRoot({ items: itemReducer }),
    EffectsModule.forRoot([ItemEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
