import React from 'react';
import type { Metadata } from 'next';
import { ArticleHero } from '@/components/bytelogic/article/ArticleHero';
import { ArticleLayout } from '@/components/bytelogic/article/ArticleLayout';
import { SmallerModelArticleContent } from '@/components/bytelogic/article/SmallerModelArticleContent';
import {
  ARTICLE_002_METADATA,
  ARTICLE_002_SECTIONS,
} from '@/data/bytelogic/articles/smaller-models';

export const metadata: Metadata = {
  title: `${ARTICLE_002_METADATA.title} | ByteLogic`,
  description: ARTICLE_002_METADATA.seo.description,
  keywords: ARTICLE_002_METADATA.tags,
  alternates: {
    canonical: ARTICLE_002_METADATA.seo.canonicalUrl,
  },
  openGraph: {
    type: 'article',
    title: `${ARTICLE_002_METADATA.title} | ByteLogic`,
    description: ARTICLE_002_METADATA.seo.description,
    url: ARTICLE_002_METADATA.seo.canonicalUrl,
    siteName: 'ByteLogic',
    publishedTime: '2026-09-18T00:00:00.000Z',
    authors: ['ByteLogic Research & Editorial'],
    tags: ARTICLE_002_METADATA.tags,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ARTICLE_002_METADATA.title} | ByteLogic`,
    description: ARTICLE_002_METADATA.subtitle,
  },
};

export default function SmallerModelArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: ARTICLE_002_METADATA.title,
    alternativeHeadline: ARTICLE_002_METADATA.subtitle,
    description: ARTICLE_002_METADATA.seo.description,
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
    datePublished: '2026-09-18',
    keywords: ARTICLE_002_METADATA.tags.join(', '),
    articleSection: 'AI / Machine Learning',
  };

  const frameworkNodes = [
    {
      num: '01',
      label: 'CAPACITY',
      title: 'HYPOTHESIS SPACE',
      sub: 'Upper Bound Volume',
    },
    {
      num: '02',
      label: 'TASK MANIFOLD',
      title: 'SPECIALIZATION',
      sub: 'Geometric Alignment',
      highlight: true,
    },
    {
      num: '03',
      label: 'DISTILLATION & QUANT',
      title: 'COMPRESSION',
      sub: 'Entropy Filtering',
    },
    {
      num: '04',
      label: 'ROOFLINE BOUNDS',
      title: 'SILICON LATENCY',
      sub: 'Realized Throughput',
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
          metadata={ARTICLE_002_METADATA}
          frameworkNodes={frameworkNodes}
          frameworkLabel="THE SYSTEMS CAPACITY INFERENCE PIPELINE"
        />

        {/* Editorial Longform Reading Experience */}
        <ArticleLayout sections={ARTICLE_002_SECTIONS}>
          <SmallerModelArticleContent />
        </ArticleLayout>
      </div>
    </>
  );
}
