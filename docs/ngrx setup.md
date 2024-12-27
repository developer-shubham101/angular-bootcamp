Sure! Let's create a simple example to demonstrate how to use NgRx in an Angular application. This example will include setting up the store, creating actions, reducers, and effects, and integrating them into an Angular component.

### Step 1: Install NgRx Packages
First, install the required NgRx packages:

```bash
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools
```

### Step 2: Define State and Actions
Create a simple state and actions for managing a list of items.

#### Actions (`src/app/store/actions/item.actions.ts`)
```typescript
import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
  '[Item] Add Item',
  props<{ item: string }>()
);

export const removeItem = createAction(
  '[Item] Remove Item',
  props<{ item: string }>()
);
```

### Step 3: Create Reducer
Create a reducer to handle the actions and update the state.

#### Reducer (`src/app/store/reducers/item.reducer.ts`)
```typescript
import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem } from '../actions/item.actions';

export const initialState: string[] = [];

const _itemReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => [...state, item]),
  on(removeItem, (state, { item }) => state.filter(i => i !== item))
);

export function itemReducer(state, action) {
  return _itemReducer(state, action);
}
```

### Step 4: Create Effects (Optional)
If you have side effects, such as API calls, create an effect to handle them.

#### Effects (`src/app/store/effects/item.effects.ts`)
```typescript
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addItem } from '../actions/item.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions) {}

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      tap(action => console.log('Item added:', action.item))
    ),
    { dispatch: false }
  );
}
```

### Step 5: Set Up Store and Effects in Module
Configure the store and effects in your Angular module.

#### App Module (`src/app/app.module.ts`)
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { itemReducer } from './store/reducers/item.reducer';
import { ItemEffects } from './store/effects/item.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ items: itemReducer }),
    EffectsModule.forRoot([ItemEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Step 6: Use Store in Component
Dispatch actions and select state in an Angular component.

#### Component (`src/app/app.component.ts`)
```typescript
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem, removeItem } from './store/actions/item.actions';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>NgRx Example</h1>
      <input #itemInput type="text" placeholder="Enter item">
      <button (click)="addItem(itemInput.value)">Add Item</button>
      <ul>
        <li *ngFor="let item of items$ | async">
          {{ item }} <button (click)="removeItem(item)">Remove</button>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  items$: Observable<string[]>;

  constructor(private store: Store<{ items: string[] }>) {
    this.items$ = store.select('items');
  }

  addItem(item: string) {
    this.store.dispatch(addItem({ item }));
  }

  removeItem(item: string) {
    this.store.dispatch(removeItem({ item }));
  }
}
```

### Summary
This example demonstrates how to set up NgRx in an Angular application and manage state using actions, reducers, and effects. You can expand this example by adding more complex state management logic, handling side effects, and integrating NgRx DevTools for better debugging.

If you have any specific questions or need further assistance, feel free to ask!