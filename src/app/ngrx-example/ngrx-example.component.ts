import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem, removeItem } from '../store/actions/item.actions';
 

@Component({
  selector: 'app-ngrx-example', 
  templateUrl: './ngrx-example.component.html',
  styleUrl: './ngrx-example.component.css',
})
export class NGRxExampleComponent {
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
