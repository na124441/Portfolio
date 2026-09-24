/**
 * Question Bank Type Definitions
 * Structured types for the ML Hands-On Problem Set
 */

export interface QuestionBankQuestion {
  id: number;
  text: string;
}

export interface QuestionBankTier {
  tier: number;
  title: string;
  subtitle: string;
  questions: QuestionBankQuestion[];
}

export interface QuestionBankDataset {
  name: string;
  source: string;
  sourceUrl: string;
  rationale: string;
}

export type QuestionBankCategory =
  | 'Regression Models'
  | 'Classification Models'
  | 'Model Evaluation'
  | 'Unsupervised Learning';

export interface QuestionBankTopic {
  /** Topic number as shown in the problem set (e.g. 6, 7, U1, U2) */
  topicNumber: string;
  /** Full topic name */
  name: string;
  /** Which category this topic belongs to */
  category: QuestionBankCategory;
  /** The 5 difficulty tiers with their questions */
  tiers: QuestionBankTier[];
  /** The matched real-world dataset for this topic */
  dataset: QuestionBankDataset;
}

/** Shape of the entire question bank data export */
export interface QuestionBankData {
  categories: QuestionBankCategory[];
  topics: QuestionBankTopic[];
}
