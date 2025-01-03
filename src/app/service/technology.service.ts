import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  NewProject,
  Project,
  UpdateProject,
} from '../store/models/company.model';
import { environment } from '../../environments/environment';
import { NewTechnology, Technology } from '../store/models/technology.model';
 
@Injectable({
  providedIn: 'root',
})
export class TechnologyService {
  private readonly apiUrl = `${environment.apiUrl}/api/technologies`;

  constructor(private readonly http: HttpClient) {}
  getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.apiUrl);
  }

  getTechnologyById(id: string): Observable<Technology> {
    return this.http.get<Technology>(`${this.apiUrl}/${id}`);
  }

  updateTechnology(technology: Technology): Observable<Technology> {
    return this.http.put<Technology>(
      `${this.apiUrl}/${technology._id}`,
      technology
    );
  }

  createTechnology(technology: NewTechnology): Observable<Technology> {
    return this.http.post<Technology>(this.apiUrl, technology);
  }
}