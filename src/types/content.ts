export type ExperimentStatus =
  | 'Idea'
  | 'Exploring'
  | 'Prototype'
  | 'Experiment'
  | 'Validated'
  | 'Archived';

export type InitiativeStatus =
  | 'Active'
  | 'Development'
  | 'Building'
  | 'Long-term'
  | 'Community';

export interface BuildLogEntry {
  id: string;
  date: string;
  timestamp: string;
  title: string;
  category: 'Engineering' | 'Research' | 'AI / ML' | 'Systems' | 'Graphics' | 'Architecture';
  summary: string;
  details?: string[];
  relatedProject?: string;
  tags: string[];
}

export interface Experiment {
  id: string;
  slug: string;
  title: string;
  category: 'AI / ML' | 'Systems' | 'Algorithms' | 'Mathematics' | 'Graphics' | 'Game Technology';
  status: ExperimentStatus;
  date: string;
  hypothesis: string;
  setup: string;
  observation: string;
  conclusion: string;
  metrics?: { label: string; value: string }[];
  tags: string[];
}

export interface Initiative {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: InitiativeStatus;
  description: string;
  overview: string[];
  architectureHighlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  relatedDomain: string;
}

export interface KnowledgeDomain {
  id: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  subtopics: string[];
  activeProjects: string[];
  experimentCount: number;
  status: string;
}
