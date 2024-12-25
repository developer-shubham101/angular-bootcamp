import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../../entities/Coffee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrl: './coffee-item.component.css',
})
export class CoffeeItemComponent implements OnInit {
  @Input() coffee: Coffee = {
    title: '',
    description: '',
    ingredients: [],
    image: '',
    id: 0,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('init');
    console.log(this.coffee);
  }

  navigateWithData(): void {
    this.router.navigate(['/coffee', this.coffee.id], {
      state: { coffee: this.coffee },
    });
  }
}
