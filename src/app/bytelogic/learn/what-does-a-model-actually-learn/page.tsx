import React from 'react';
import type { Metadata } from 'next';
import { ArticleHero } from '@/components/bytelogic/article/ArticleHero';
import { ArticleLayout } from '@/components/bytelogic/article/ArticleLayout';
import { ModelLearningArticleContent } from '@/components/bytelogic/article/ModelLearningArticleContent';
import {
  ARTICLE_003_METADATA,
  ARTICLE_003_SECTIONS,
} from '@/data/bytelogic/articles/what-does-a-model-actually-learn';

export const metadata: Metadata = {
  title: `${ARTICLE_003_METADATA.title} | ByteLogic`,
  description: ARTICLE_003_METADATA.seo.description,
  keywords: ARTICLE_003_METADATA.tags,
  alternates: {
    canonical: ARTICLE_003_METADATA.seo.canonicalUrl,
  },
  openGraph: {
    type: 'article',
    title: `${ARTICLE_003_METADATA.title} | ByteLogic`,
    description: ARTICLE_003_METADATA.seo.description,
    url: ARTICLE_003_METADATA.seo.canonicalUrl,
    siteName: 'ByteLogic',
    publishedTime: '2026-09-25T00:00:00.000Z',
    authors: ['ByteLogic Research & Editorial'],
    tags: ARTICLE_003_METADATA.tags,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ARTICLE_003_METADATA.title} | ByteLogic`,
    description: ARTICLE_003_METADATA.subtitle,
  },
};

export default function ModelLearningArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: ARTICLE_003_METADATA.title,
    alternativeHeadline: ARTICLE_003_METADATA.subtitle,
    description: ARTICLE_003_METADATA.seo.description,
    author: {
      '@type': 'Organization',
      name: 'ByteLogic Research & Editorial',
      url: 'https://nayantsrivastava.in/bytelogic',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ByteLogic',
      url: 'https://nayantsrivastava.in/bytelogic',
    },
    datePublished: '2026-09-25',
    keywords: ARTICLE_003_METADATA.tags.join(', '),
    articleSection: 'AI / Machine Learning',
  };

  const frameworkNodes = [
    {
      num: '01',
      label: 'INIT STATE',
      title: 'PARAMETERS',
      sub: 'Random Weights / Bias',
    },
    {
      num: '02',
      label: 'OBJECTIVE',
      title: 'LOSS SIGNAL',
      sub: 'Error Quantification',
    },
    {
      num: '03',
      label: 'OPTIMIZATION',
      title: 'GRADIENT STEP',
      sub: 'Parameter Updates',
      highlight: true,
    },
    {
      num: '04',
      label: 'EMERGENCE',
      title: 'GENERALIZATION',
      sub: 'Useful Representations',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full">
        {/* Editorial Hero with Custom Metadata and Framework */}
        <ArticleHero
          metadata={ARTICLE_003_METADATA}
          frameworkNodes={frameworkNodes}
          frameworkLabel="THE MACHINE LEARNING OPTIMIZATION LIFECYCLE"
        />

        {/* Editorial Longform Reading Experience */}
        <ArticleLayout sections={ARTICLE_003_SECTIONS}>
          <ModelLearningArticleContent />
        </ArticleLayout>
      </div>
    </>
  );
}
