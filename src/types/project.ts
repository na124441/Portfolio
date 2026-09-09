export type ProjectTier = 'S' | 'A' | 'B' | 'Archive';

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'paper' | 'docs' | 'external';
}

export interface ArchitectureNode {
  id: string;
  title: string;
  layer: string;
  description: string;
  tech?: string[];
}

export interface ArchitectureDataFlow {
  from: string;
  to: string;
  label: string;
}

export interface CaseStudySectionProblem {
  title: string;
  statement: string;
  whyDifficult: string[];
  operationalConstraints: string[];
}

export interface CaseStudySectionMotivation {
  whyBuilt: string;
  realWorldImpact: string;
}

export interface CaseStudySectionApproach {
  proposedSolution: string;
  coreHypothesis: string;
  architecturalTenets: { title: string; description: string }[];
}

export interface CaseStudySectionSystem {
  diagramSummary: string;
  nodes: ArchitectureNode[];
  dataFlows: ArchitectureDataFlow[];
  componentRelationships: string;
}

export interface TechnicalDeepDiveItem {
  title: string;
  concept: string;
  mathOrFormula?: string;
  details: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface CaseStudySectionDeepDive {
  introduction: string;
  items: TechnicalDeepDiveItem[];
}

export interface CaseStudySectionTheHardPart {
  challenge: string;
  whyStandardSolutionsFailed: string;
  resolutionMechanism: string;
}

export interface ExperimentItem {
  hypothesis: string;
  setup: string;
  observation: string;
  verdict: 'Confirmed' | 'Refuted' | 'Refined';
}

export interface CaseStudySectionExperiments {
  overview: string;
  experiments: ExperimentItem[];
}

export interface BenchmarkComparison {
  metric: string;
  baseline: string;
  ourSystem: string;
  delta: string;
  isPositive: boolean;
}

export interface CaseStudySectionResults {
  summary: string;
  metrics: ProjectMetric[];
  comparisons: BenchmarkComparison[];
}

export interface FailureChain {
  attempt: string;
  failure: string;
  diagnosis: string;
  modification: string;
  result: string;
}

export interface CaseStudySectionFailure {
  narrative: string;
  chain: FailureChain;
}

export interface EvolutionStage {
  version: string;
  title: string;
  timeline: string;
  architecture: string;
  outcome: string;
  keyLimitation: string;
}

export interface CaseStudySectionEvolution {
  stages: EvolutionStage[];
}

export interface CaseStudySectionLessons {
  engineeringLessons: string[];
  systemsLessons: string[];
}

export interface CaseStudySectionFuture {
  upcomingMilestones: string[];
  openResearchQuestions: string[];
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tier: ProjectTier;
  oneLineThesis: string;
  category: string[];
  status: string;
  timeline: string;
  role: string;
  featuredMetric: { label: string; value: string };
  shortDescription: string;
  links: ProjectLink[];
  technologies: {
    domain: string;
    items: string[];
  }[];
  // 12 Case Study Sections
  sections: {
    problem: CaseStudySectionProblem;
    motivation: CaseStudySectionMotivation;
    approach: CaseStudySectionApproach;
    system: CaseStudySectionSystem;
    technicalDeepDive: CaseStudySectionDeepDive;
    theHardPart: CaseStudySectionTheHardPart;
    experiments: CaseStudySectionExperiments;
    results: CaseStudySectionResults;
    failure: CaseStudySectionFailure;
    evolution: CaseStudySectionEvolution;
    lessons: CaseStudySectionLessons;
    future: CaseStudySectionFuture;
  };
}
