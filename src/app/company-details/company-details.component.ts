import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { loadCompany, updateCompany } from '../store/actions/company.actions';
import { AppState } from '../store/app.state';
import { selectSelectedCompany } from '../store/selectors/company.selectors';
import { Company } from '../store/models/company.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  company$!: Observable<Company | undefined | null>;
  company!: Company;
  editMode = false;
  
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(loadCompany({ id }));
      this.company$ = this.store.select(selectSelectedCompany);
      this.company$.subscribe((company: Company | undefined | null) => {
        if (company) {
          this.company = { ...company };
        }
      });
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
