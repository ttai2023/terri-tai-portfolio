export interface Project {
  title: string;
  description: string;
  details:string;
  tags: string[];
  link?: string;
  image?: string;
  date: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
