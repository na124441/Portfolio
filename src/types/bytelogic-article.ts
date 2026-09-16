export interface ArticleMetadata {
  slug: string;
  articleNumber: string;
  title: string;
  subtitle: string;
  readingTime: string;
  domain: string;
  tags: string[];
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
}

export interface ArticleSectionItem {
  id: string;
  title: string;
  number?: string;
}
