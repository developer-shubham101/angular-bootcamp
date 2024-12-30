import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { loadCompany, updateCompany } from '../store/actions/company.actions';
import { AppState } from '../store/app.state';
import { selectSelectedCompany } from '../store/selectors/company.selectors';
import { Company } from '../store/models/company.model';
import { Observable } from 'rxjs';
import moment from 'moment';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  company$!: Observable<Company | undefined | null>;
  company!: Company;
  editMode = false;

  constructor(
    private readonly store: Store<AppState>,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(loadCompany({ id }));
      this.company$ = this.store.select(selectSelectedCompany);
      this.company$.subscribe((company: Company | undefined | null) => {
        if (company) {
          this.company = { ...company };
          this.formatDates();
        }
      });
    }
  }

  formatDates(): void {
    if (!this.company) {
      return;
    }
    if (this.company.from_date) {
      this.company.from_date = moment(this.company.from_date).format(
        'YYYY-MM-DD'
      );
    }
    if (this.company.to_date) {
      this.company.to_date = moment(this.company.to_date).format('YYYY-MM-DD');
    }
  }

  enableEditMode(): void {
    this.editMode = true;
  }
  disableEditMode(): void {
    this.editMode = false;
  }
  onSubmit(): void {
    this.store.dispatch(updateCompany({ company: this.company }));
    this.disableEditMode();
  }
}
