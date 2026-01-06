export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Tech' | 'Design' | 'Core';
}

export interface NavItem {
  label: string;
  href: string;
}
