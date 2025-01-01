import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Company } from '../../store/models/company.model';
import { loadCompanies } from '../../store/actions/company.actions';
import { AppState } from '../../store/app.state';
import { selectAllCompanies } from '../../store/selectors/company.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  companies$!: Observable<Company[]>;

  constructor(private readonly store: Store<AppState>, private readonly router: Router) {}

  ngOnInit(): void {
    this.companies$ = this.store.select(selectAllCompanies);
    this.companies$.subscribe((companies) => {
      console.log('Companies:', companies);
    });
    this.store.dispatch(loadCompanies());
  }

  viewCompanyDetails(id: string): void {
    this.router.navigate(['/companies', id]); // Navigate to the company details page
  }
}
