import { Coffee } from '../../store/models/Coffee';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  coffee: Coffee = {
    title: '',
    description: '',
    ingredients: [],
    image: '',
    id: 0,
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('Test');
    console.log(this.route.snapshot.params['id']);

    this.coffee = history.state.coffee;
  }
}
