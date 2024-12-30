export interface Project {
  _id: string;
  organization: string;
  position: string;
  project_name: string;
  from_date: string;
  to_date: string;
  platform: string;
  technology: string[];
  about_project: string;
  responsibilities: string[];
}

export interface File {
  _id: string;
  title: string;
  tags: string[];
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
  path: string;
  description?: string;
}

export interface Company {
  _id: string;
  organization: string;
  position: string;
  from_date: Date;
  to_date: Date;
  role: string;
  responsibilities: string[];
  projects: Project[];
  files: File[];
}