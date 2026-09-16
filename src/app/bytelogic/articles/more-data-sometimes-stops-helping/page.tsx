import React from 'react';
import type { Metadata } from 'next';
import { ArticleHero } from '@/components/bytelogic/article/ArticleHero';
import { ArticleLayout } from '@/components/bytelogic/article/ArticleLayout';
import { ArticleContent } from '@/components/bytelogic/article/ArticleContent';
import { ARTICLE_001_METADATA } from '@/data/bytelogic/articles/more-data';

export const metadata: Metadata = {
  title: 'What Does More Data Sometimes Stop Helping? | ByteLogic',
  description:
    'More data usually helps machine-learning systems—but not indefinitely. Explore diminishing returns, redundancy, data quality, coverage, model bottlenecks, and why useful information matters more than raw dataset size.',
  keywords: [
    'ByteLogic',
    'Machine Learning',
    'Data Quality',
    'Diminishing Returns',
    'Model Capacity',
    'Coverage',
    'Information Theory',
    'AI Research',
    'Article 001',
  ],
  alternates: {
    canonical: ARTICLE_001_METADATA.seo.canonicalUrl,
  },
  openGraph: {
    type: 'article',
    title: 'What Does More Data Sometimes Stop Helping? | ByteLogic',
    description:
      'More data usually helps machine-learning systems—but not indefinitely. Explore diminishing returns, redundancy, data quality, coverage, model bottlenecks, and why useful information matters more than raw dataset size.',
    url: ARTICLE_001_METADATA.seo.canonicalUrl,
    siteName: 'ByteLogic',
    publishedTime: '2026-09-16T00:00:00.000Z',
    authors: ['ByteLogic Research & Editorial'],
    tags: ARTICLE_001_METADATA.tags,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Does More Data Sometimes Stop Helping? | ByteLogic',
    description:
      'When a bigger dataset stops being a better dataset. Explore diminishing returns, redundancy, and data quality in machine learning.',
  },
};

export default function MoreDataArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: ARTICLE_001_METADATA.title,
    alternativeHeadline: ARTICLE_001_METADATA.subtitle,
    description: ARTICLE_001_METADATA.seo.description,
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
    datePublished: '2026-09-16',
    keywords: ARTICLE_001_METADATA.tags.join(', '),
    articleSection: 'AI / Machine Learning',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full">
        {/* Editorial Hero */}
        <ArticleHero />

        {/* Editorial Longform Reading Experience */}
        <ArticleLayout>
          <ArticleContent />
        </ArticleLayout>
      </div>
    </>
  );
}
