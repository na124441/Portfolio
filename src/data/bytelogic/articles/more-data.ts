import { ArticleMetadata, ArticleSectionItem } from '@/types/bytelogic-article';

export const ARTICLE_001_METADATA: ArticleMetadata = {
  slug: 'more-data-sometimes-stops-helping',
  articleNumber: 'ARTICLE 001',
  title: 'What Does More Data Sometimes Stop Helping?',
  subtitle: 'When a bigger dataset stops being a better dataset.',
  readingTime: '8–10 min read',
  domain: 'AI / Machine Learning',
  tags: [
    'Machine Learning',
    'Data Quality',
    'Diminishing Returns',
    'Model Capacity',
    'Coverage',
    'Information Theory',
  ],
  publishedDate: 'Editorial · 2026',
  author: {
    name: 'ByteLogic Research & Editorial',
    role: 'Theoretical & Applied AI Systems',
  },
  seo: {
    title: 'What Does More Data Sometimes Stop Helping? | ByteLogic',
    description:
      'More data usually helps machine-learning systems—but not indefinitely. Explore diminishing returns, redundancy, data quality, coverage, model bottlenecks, and why useful information matters more than raw dataset size.',
    canonicalUrl: 'https://nayantsrivastava.in/bytelogic/articles/more-data-sometimes-stops-helping',
  },
};

export const ARTICLE_001_SECTIONS: ArticleSectionItem[] = [
  { id: 'the-first-few-examples-matter-a-lot', title: 'The First Few Examples Matter a Lot', number: '01' },
  { id: 'a-dataset-can-become-larger-without-becoming-more-informative', title: 'A Dataset Can Become Larger Without Becoming More Informative', number: '02' },
  { id: 'the-problem-with-repetition', title: 'The Problem With Repetition', number: '03' },
  { id: 'what-if-we-are-missing-entire-regions-of-the-problem', title: 'What If We Are Missing Entire Regions of the Problem?', number: '04' },
  { id: 'more-data-can-also-mean-more-noise', title: 'More Data Can Also Mean More Noise', number: '05' },
  { id: 'the-model-can-become-the-bottleneck', title: 'The Model Can Become the Bottleneck', number: '06' },
  { id: 'the-data-we-add-may-not-be-the-data-we-need', title: 'The Data We Add May Not Be the Data We Need', number: '07' },
  { id: 'more-data-doesnt-mean-more-coverage', title: "More Data Doesn't Mean More Coverage", number: '08' },
  { id: 'so-when-does-more-data-stop-helping', title: 'So When Does More Data Stop Helping?', number: '09' },
  { id: 'the-interesting-part-isnt-the-plateau', title: "The Interesting Part Isn't the Plateau", number: '10' },
  { id: 'the-hidden-resource-information', title: 'The Hidden Resource: Information', number: '11' },
  { id: 'so-what-should-we-do-instead', title: 'So What Should We Do Instead?', number: '12' },
  { id: 'the-bigger-lesson', title: 'The Bigger Lesson', number: '13' },
];
