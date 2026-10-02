import React from 'react';
import type { Metadata } from 'next';
import { ArticleHero } from '@/components/bytelogic/article/ArticleHero';
import { ArticleLayout } from '@/components/bytelogic/article/ArticleLayout';
import { ModelImplicitLearningArticleContent } from '@/components/bytelogic/article/ModelImplicitLearningArticleContent';
import {
  ARTICLE_005_METADATA,
  ARTICLE_005_SECTIONS,
} from '@/data/bytelogic/articles/can-a-model-learn-something-that-nobody-explicitly-taught-it';

export const metadata: Metadata = {
  title: `${ARTICLE_005_METADATA.title} | ByteLogic`,
  description: ARTICLE_005_METADATA.seo.description,
  keywords: ARTICLE_005_METADATA.tags,
  alternates: {
    canonical: ARTICLE_005_METADATA.seo.canonicalUrl,
  },
  openGraph: {
    type: 'article',
    title: `${ARTICLE_005_METADATA.title} | ByteLogic`,
    description: ARTICLE_005_METADATA.seo.description,
    url: ARTICLE_005_METADATA.seo.canonicalUrl,
    siteName: 'ByteLogic',
    publishedTime: '2026-10-03T00:00:00.000Z',
    authors: ['ByteLogic Research & Editorial'],
    tags: ARTICLE_005_METADATA.tags,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ARTICLE_005_METADATA.title} | ByteLogic`,
    description: ARTICLE_005_METADATA.subtitle,
  },
};

export default function ImplicitLearningArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: ARTICLE_005_METADATA.title,
    alternativeHeadline: ARTICLE_005_METADATA.subtitle,
    description: ARTICLE_005_METADATA.seo.description,
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
    datePublished: '2026-10-03',
    keywords: ARTICLE_005_METADATA.tags.join(', '),
    articleSection: 'AI / Machine Learning',
  };

  const frameworkNodes = [
    {
      num: '01',
      label: 'RAW SIGNAL',
      title: 'UNLABELED CORPUS',
      sub: 'Implicit Correlations',
    },
    {
      num: '02',
      label: 'OBJECTIVE',
      title: 'LOSS CRITERION',
      sub: 'Next-Token / ERM',
    },
    {
      num: '03',
      label: 'REPRESENTATION',
      title: 'LATENT STRUCTURE',
      sub: 'Geometric Manifolds',
      highlight: true,
    },
    {
      num: '04',
      label: 'GENERALIZATION',
      title: 'NOVEL SYNTHESIS',
      sub: 'Compositional Behavior',
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
          metadata={ARTICLE_005_METADATA}
          frameworkNodes={frameworkNodes}
          frameworkLabel="THE IMPLICIT DISCOVERY DYNAMICS"
        />

        {/* Editorial Longform Reading Experience */}
        <ArticleLayout sections={ARTICLE_005_SECTIONS}>
          <ModelImplicitLearningArticleContent />
        </ArticleLayout>
      </div>
    </>
  );
}
