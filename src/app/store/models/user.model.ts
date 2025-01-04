export interface User {
  _id: string;
  profileType: string;
  name: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
  };
  aboutMe: string;
  keySkills: Array<{ category: string; skills: string[] }>;
  education: Array<{
    qualificationType: string;
    degreeName: string;
    specialization: string;
    universityName: string;
    instituteName: string;
    location: string;
    duration: {
      startMonth: string;
      startYear: number;
      endMonth: string;
      endYear: number;
    };
    courseType: string;
    percentage: string;
  }>;
}
