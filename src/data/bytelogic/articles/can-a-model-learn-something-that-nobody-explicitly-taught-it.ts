import { ArticleMetadata, ArticleSectionItem } from '@/types/bytelogic-article';

export const ARTICLE_005_METADATA: ArticleMetadata = {
  slug: 'can-a-model-learn-something-that-nobody-explicitly-taught-it',
  articleNumber: 'ARTICLE 005',
  title: 'Can a Model Learn Something That Nobody Explicitly Taught It?',
  subtitle:
    'On implicit structure, emergent representations, compositional generalization, and the boundary between discovering latent patterns and inventing new facts.',
  readingTime: '11–13 min read',
  domain: 'AI / Machine Learning · Theoretical Foundations',
  tags: [
    'Machine Learning',
    'Implicit Structure',
    'Emergent Representations',
    'Self-Supervised Learning',
    'Compositional Generalization',
    'Mechanistic Interpretability',
    'Shortcut Learning',
    'Foundational AI',
  ],
  publishedDate: 'Editorial · October 2026',
  author: {
    name: 'ByteLogic Research & Editorial',
    role: 'Theoretical & Applied AI Systems',
  },
  seo: {
    title: 'Can a Model Learn Something That Nobody Explicitly Taught It? | ByteLogic',
    description:
      'Can an AI model discover patterns, representations, and useful relationships that were never explicitly taught? Explore implicit structure, emergence, compositional generalization, and learning boundaries.',
    canonicalUrl:
      'https://nayantsrivastava.in/bytelogic/articles/can-a-model-learn-something-that-nobody-explicitly-taught-it',
  },
};

export const ARTICLE_005_SECTIONS: ArticleSectionItem[] = [
  { id: 'introduction', title: 'The Teaching Intuition and Its Limits', number: '00' },
  { id: 'what-does-teach-mean', title: '1. What Does "Teach" Actually Mean?', number: '01' },
  { id: 'explicit-vs-implicit', title: '2. Explicit Knowledge vs. Implicit Structure', number: '02' },
  { id: 'not-learning-from-nothing', title: "3. The Model Isn't Learning From Nothing", number: '03' },
  { id: 'emergent-representations', title: '4. Emergent Representations', number: '04' },
  { id: 'self-supervised-learning', title: '5. Self-Supervised Learning & General Objectives', number: '05' },
  { id: 'simple-example', title: '6. A Simple Example of Latent Association', number: '06' },
  { id: 'understanding-vs-correlation', title: '7. Is the Model Actually "Understanding"?', number: '07' },
  { id: 'compositional-generalization', title: '8. The Model Can Combine Things Nobody Combined', number: '08' },
  { id: 'truly-new-knowledge', title: '9. What About Truly New Knowledge?', number: '09' },
  { id: 'source-of-new-knowledge', title: '10. Where Does the "New" Knowledge Come From?', number: '10' },
  { id: 'role-of-objective-function', title: '11. The Role of the Objective Function', number: '11' },
  { id: 'why-scale-matters', title: '12. This Is Why Scale Matters', number: '12' },
  { id: 'shortcut-learning', title: '13. A Model Can Discover a Shortcut Too', number: '13' },
  { id: 'fundamental-shift', title: '14. This Changes How We Think About Machine Learning', number: '14' },
  { id: 'interpretability', title: "15. We Don't Always Know What It Learned", number: '15' },
  { id: 'four-modes-of-learning', title: '16. So, Can a Model Learn Something Nobody Taught It?', number: '16' },
  { id: 'the-bigger-question', title: '17. The Bigger Question', number: '17' },
  { id: 'one-sentence-takeaway', title: 'The One-Sentence Takeaway', number: '18' },
];
