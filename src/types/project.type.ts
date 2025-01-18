import { ReactNode } from 'react';

// Product type
export interface Product {
  name: string;
  details: string;
}

// Stats type - flexible object with string keys and string values
export interface Stats {
  [key: string]: string;
}

// Project type
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  icon: ReactNode;
  description: string;
  image: string;
  products?: Product[];
  stats: Stats;
  impact: string[];
  tags: string[];
  role: string;
}

// Props for ProjectCard component
export interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}
