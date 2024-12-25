import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Coffee } from '../entities/Coffee';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  coffees?: Coffee[];

  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    console.log("init");
    
    this.retrieveCoffee();
  }

  retrieveCoffee(): void {
    this.homeService.getAll().subscribe({
      next: (data) => {
        this.coffees = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
