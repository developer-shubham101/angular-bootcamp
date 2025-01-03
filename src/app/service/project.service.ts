import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewProject, Project, UpdateProject } from '../store/models/company.model';
import { environment } from '../../environments/environment';
 

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly apiUrl = `${environment.apiUrl}/api/user-experiences`;

  constructor(private readonly http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  getProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  updateProject(project: UpdateProject): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${project._id}`, project);
  }

  createProject(project: NewProject): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }
}
