export interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  achievements: Achievement[];
  technologies: string[];
}

export interface Achievement {
  category: string;
  description: string;
  impact: string;
}

// Case Study Project for detailed project showcase
export interface CaseStudyProject {
  id: string;
  title: string;
  subtitle: string;
  businessProblem: string;
  architectureOverview: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  impact: string;
  securityConsiderations?: string[];
  databaseDecisions?: string[];
}

export interface ExperienceData {
  workExperience: WorkExperience[];
  caseStudyProjects: CaseStudyProject[];
}

// Core Stack Types
export interface CoreStackItem {
  name: string;
  description?: string;
  icon?: string;
}

export interface CoreStackCategory {
  title: string;
  icon: string;
  items: CoreStackItem[];
}

// Testimonial Types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
}

export interface TechnicalArticle {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  content: string;
}
