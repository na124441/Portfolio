import React from 'react';
import type { Metadata } from 'next';
import { ArticleHero } from '@/components/bytelogic/article/ArticleHero';
import { ArticleLayout } from '@/components/bytelogic/article/ArticleLayout';
import { CapableWithoutGettingBiggerArticleContent } from '@/components/bytelogic/article/CapableWithoutGettingBiggerArticleContent';
import {
  ARTICLE_004_METADATA,
  ARTICLE_004_SECTIONS,
} from '@/data/bytelogic/articles/why-does-ai-become-more-capable-without-getting-bigger';

export const metadata: Metadata = {
  title: `${ARTICLE_004_METADATA.title} | ByteLogic`,
  description: ARTICLE_004_METADATA.seo.description,
  keywords: ARTICLE_004_METADATA.tags,
  alternates: {
    canonical: ARTICLE_004_METADATA.seo.canonicalUrl,
  },
  openGraph: {
    type: 'article',
    title: `${ARTICLE_004_METADATA.title} | ByteLogic`,
    description: ARTICLE_004_METADATA.seo.description,
    url: ARTICLE_004_METADATA.seo.canonicalUrl,
    siteName: 'ByteLogic',
    publishedTime: '2026-09-29T00:00:00.000Z',
    authors: ['ByteLogic Research & Editorial'],
    tags: ARTICLE_004_METADATA.tags,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ARTICLE_004_METADATA.title} | ByteLogic`,
    description: ARTICLE_004_METADATA.subtitle,
  },
};

export default function CapableWithoutGettingBiggerArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: ARTICLE_004_METADATA.title,
    alternativeHeadline: ARTICLE_004_METADATA.subtitle,
    description: ARTICLE_004_METADATA.seo.description,
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
    datePublished: '2026-09-29',
    keywords: ARTICLE_004_METADATA.tags.join(', '),
    articleSection: 'AI / Machine Learning',
  };

  const frameworkNodes = [
    {
      num: '01',
      label: 'DATA CURATION',
      title: 'QUALITY SIGNAL',
      sub: 'Information Density',
    },
    {
      num: '02',
      label: 'DISTILLATION',
      title: 'KNOWLEDGE TRANSFER',
      sub: 'Teacher Soft Logits',
    },
    {
      num: '03',
      label: 'QUANTIZATION',
      title: 'COMPACT PRECISION',
      sub: 'INT4 / Silicon Fit',
      highlight: true,
    },
    {
      num: '04',
      label: 'TEST-TIME COMPUTE',
      title: 'DYNAMIC INFERENCE',
      sub: 'Extended Reasoning',
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
          metadata={ARTICLE_004_METADATA}
          frameworkNodes={frameworkNodes}
          frameworkLabel="THE EFFICIENCY MULTIPLIER PIPELINE"
        />

        {/* Editorial Longform Reading Experience */}
        <ArticleLayout sections={ARTICLE_004_SECTIONS}>
          <CapableWithoutGettingBiggerArticleContent />
        </ArticleLayout>
      </div>
    </>
  );
}
