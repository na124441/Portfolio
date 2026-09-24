import { ArticleMetadata, ArticleSectionItem } from '@/types/bytelogic-article';

export const ARTICLE_003_METADATA: ArticleMetadata = {
  slug: 'what-does-a-model-actually-learn',
  articleNumber: 'ARTICLE 003',
  title: 'What Does a Model Actually Learn?',
  subtitle:
    'An exploration of parameters, representations, optimization, generalization, and what “learning” really means inside a model.',
  readingTime: '10–12 min read',
  domain: 'Machine Learning',
  tags: [
    'Machine Learning',
    'Parameters',
    'Optimization',
    'Generalization',
    'Representations',
    'Neural Networks',
    'Loss Functions',
    'Gradient Descent',
  ],
  publishedDate: 'September 25, 2026',
  author: {
    name: 'ByteLogic Research & Editorial',
    role: 'Theoretical & Applied AI Systems',
  },
  seo: {
    title: 'What Does a Model Actually Learn? | ByteLogic',
    description:
      'What does a machine-learning model actually learn? An exploration of parameters, representations, optimization, generalization, and what “learning” really means inside a model.',
    canonicalUrl:
      'https://nayantsrivastava.in/bytelogic/learn/what-does-a-model-actually-learn',
  },
};

export const ARTICLE_003_SECTIONS: ArticleSectionItem[] = [
  { id: 'a-model-starts-with-almost-nothing', title: 'A Model Starts With Almost Nothing', number: '01' },
  { id: 'learning-is-not-the-same-as-memorizing', title: 'Learning Is Not the Same as Memorizing', number: '02' },
  { id: 'so-what-is-actually-changing', title: 'So What Is Actually Changing?', number: '03' },
  { id: 'the-loss-function-defines-what-learning-means', title: 'The Loss Function Defines What “Learning” Means', number: '04' },
  { id: 'gradient-descent-how-learning-happens', title: 'Gradient Descent: How Learning Happens', number: '05' },
  { id: 'but-where-does-the-knowledge-go', title: 'But Where Does the Knowledge Go?', number: '06' },
  { id: 'models-learn-relationships', title: 'Models Learn Relationships', number: '07' },
  { id: 'features-are-not-always-human-readable', title: 'Features Are Not Always Human-Readable', number: '08' },
  { id: 'learning-happens-at-different-levels', title: 'Learning Happens at Different Levels', number: '09' },
  { id: 'the-dataset-shapes-the-mind-of-the-model', title: 'The Dataset Shapes the Mind of the Model', number: '10' },
  { id: 'a-model-can-learn-the-wrong-thing', title: 'A Model Can Learn the Wrong Thing', number: '11' },
  { id: 'then-what-does-understanding-mean', title: 'Then What Does “Understanding” Mean?', number: '12' },
  { id: 'generalization-is-the-real-test', title: 'Generalization Is the Real Test', number: '13' },
  { id: 'the-strange-part-we-dont-program-the-final-behavior', title: "The Strange Part: We Don't Program the Final Behavior", number: '14' },
  { id: 'so-what-does-a-model-actually-learn', title: 'So What Does a Model Actually Learn?', number: '15' },
  { id: 'the-most-important-mental-model', title: 'The Most Important Mental Model', number: '16' },
  { id: 'the-bigger-question', title: 'The Bigger Question', number: '17' },
];
