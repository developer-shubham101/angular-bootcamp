import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../store/models/company.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private readonly apiUrl = `${environment.apiUrl}/api/companies`;

  constructor(private readonly http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompanyById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${id}`);
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company);
  }

  updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/${company._id}`, company);
  }
}
