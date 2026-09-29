import { ArticleMetadata, ArticleSectionItem } from '@/types/bytelogic-article';

export const ARTICLE_004_METADATA: ArticleMetadata = {
  slug: 'why-does-ai-become-more-capable-without-getting-bigger',
  articleNumber: 'ARTICLE 004',
  title: 'Why Does AI Become More Capable Without Getting Bigger?',
  subtitle:
    'Understanding the science behind smaller, smarter AI models: parameter efficiency, data curation, distillation, quantization, and test-time compute.',
  readingTime: '12–14 min read',
  domain: 'AI / Machine Learning · Systems & Architecture',
  tags: [
    'Model Efficiency',
    'Parameter Capacity',
    'Data Quality',
    'Knowledge Distillation',
    'Transformer Architectures',
    'Mixture of Experts',
    'Quantization',
    'Post-Training',
    'Test-Time Compute',
    'Systems Engineering',
  ],
  publishedDate: 'Editorial · 2026',
  author: {
    name: 'ByteLogic Research & Editorial',
    role: 'Theoretical & Applied AI Systems',
  },
  seo: {
    title: 'Why Does AI Become More Capable Without Getting Bigger? | ByteLogic',
    description:
      'How do smaller AI models outperform their predecessors without growing in size? Explore parameter capacity, data curation, knowledge distillation, sparse architectures, quantization, and inference compute.',
    canonicalUrl:
      'https://nayantsrivastava.in/bytelogic/articles/why-does-ai-become-more-capable-without-getting-bigger',
  },
};

export const ARTICLE_004_SECTIONS: ArticleSectionItem[] = [
  { id: 'the-biggest-misconception', title: '1. More Parameters Does Not Mean More Intelligence', number: '01' },
  { id: 'better-training-data', title: '2. Better Training Data: Learning More from Every Example', number: '02' },
  { id: 'training-efficiency', title: '3. Training Efficiency: More Intelligence from the Same Model', number: '03' },
  { id: 'knowledge-distillation', title: '4. Knowledge Distillation: Teaching a Small Model from a Larger One', number: '04' },
  { id: 'better-architectures', title: '5. Better Architectures: Doing More with the Same Parameters', number: '05' },
  { id: 'quantization', title: '6. Quantization: Compressing Memory Without Sacrificing Behavior', number: '06' },
  { id: 'better-post-training', title: '7. Better Post-Training: Aligning for Real-World Utility', number: '07' },
  { id: 'test-time-compute', title: '8. Test-Time Compute: Thinking Longer Rather Than Growing Larger', number: '08' },
  { id: 'the-bigger-picture', title: '9. The Bigger Picture: Intelligence as an Engineering Trade-Off', number: '09' },
  { id: 'what-this-means-for-the-future', title: '10. What This Means for the Future of AI', number: '10' },
  { id: 'conclusion', title: 'Conclusion: Capability Per Watt, Parameter, and Operation', number: '11' },
];
