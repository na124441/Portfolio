import { ArticleMetadata, ArticleSectionItem } from '@/types/bytelogic-article';

export const ARTICLE_002_METADATA: ArticleMetadata = {
  slug: 'why-can-a-smaller-model-beat-a-larger-model',
  articleNumber: 'ARTICLE 002',
  title: 'Why Can a Smaller Model Beat a Larger Model?',
  subtitle:
    'If more parameters generally provide more capacity, why can a smaller AI model sometimes outperform a much larger model? On the physics of parameter capacity, task manifolds, and efficient intelligence.',
  readingTime: '14–16 min read',
  domain: 'AI / Machine Learning · Systems & Architecture',
  tags: [
    'Model Scaling',
    'Quantization',
    'Knowledge Distillation',
    'Task Manifolds',
    'Mixture of Experts',
    'Hardware Efficiency',
    'Pareto Optimality',
    'Systems Engineering',
  ],
  publishedDate: 'Editorial · 2026',
  author: {
    name: 'ByteLogic Research & Editorial',
    role: 'Theoretical & Applied AI Systems',
  },
  seo: {
    title: 'Why Can a Smaller Model Beat a Larger Model? | ByteLogic',
    description:
      'If more parameters generally provide more capacity, why can a smaller AI model sometimes outperform a much larger model? Explore task manifolds, data quality, knowledge distillation, quantization, and systems constraints.',
    canonicalUrl:
      'https://nayantsrivastava.in/bytelogic/articles/why-can-a-smaller-model-beat-a-larger-model',
  },
};

export const ARTICLE_002_SECTIONS: ArticleSectionItem[] = [
  { id: 'the-anomaly-in-the-metric', title: 'The Anomaly in the Metric', number: '01' },
  { id: 'parameters-are-capacity', title: 'Parameters Are Capacity, Not an Intelligence Meter', number: '02' },
  { id: 'better-depends-on-the-task', title: '"Better" Is Always Conditional on the Task', number: '03' },
  { id: 'data-quality-dominates-scale', title: 'Data Quality Dominates Raw Scale', number: '04' },
  { id: 'the-training-recipe', title: 'The Training Recipe: Optimization and Alignment', number: '05' },
  { id: 'specialization-and-task-manifolds', title: 'Specialization and the Geometry of Task Manifolds', number: '06' },
  { id: 'knowledge-distillation', title: 'Knowledge Distillation: Compressing the Teacher’s Manifold', number: '07' },
  { id: 'compression-and-sparsity', title: 'Compression: Pruning, Factorization, and Structural Efficiency', number: '08' },
  { id: 'precision-vs-scale-quantization', title: 'Precision vs. Scale: The Mathematics of Quantization', number: '09' },
  { id: 'the-cost-of-being-large', title: 'The Cost of Being Large: The Physics of Hardware Execution', number: '10' },
  { id: 'pareto-efficiency', title: 'Pareto Efficiency: The Performance-Compute Frontier', number: '11' },
  { id: 'hardware-changes-what-better-means', title: 'Hardware Changes What "Better" Means', number: '12' },
  { id: 'mixture-of-experts', title: 'Mixture-of-Experts: Total Parameters vs. Active Parameters', number: '13' },
  { id: 'can-a-smaller-model-be-smarter', title: 'Can a Smaller Model Actually Be "Smarter"?', number: '14' },
  { id: 'a-rigorous-mental-model', title: 'A Rigorous Mental Model: Intelligence as Constrained Optimization', number: '15' },
  { id: 'the-compression-of-intelligence', title: 'The Deeper Idea: The Compression of Intelligence', number: '16' },
  { id: 'the-era-of-efficient-intelligence', title: 'Conclusion: The Era of Efficient Intelligence', number: '17' },
];
