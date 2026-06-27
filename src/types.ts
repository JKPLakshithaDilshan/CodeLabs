export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to look up the Lucide icon dynamically
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Technology {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'tools';
  color: string;
}
