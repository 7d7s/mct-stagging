// components/SEO.tsx
import { FC } from 'react';
import MetaTags from './MetaTags';
import {SchemaMarkup} from './SchemaMarkup';

interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  openGraph?: {
    title: string;
    description: string;
    images: string[];
  };
  twitter?: {
    card: string;
    site: string;
  };
}
interface SeoComponentProps {
  metadata: MetaData;
  schema: Record<string, unknown>;
};

export const Seo: FC<SeoComponentProps> = ({ metadata, schema }) => {
  // Component implementation
  return (
    <>
      <MetaTags metaData={{
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords.join(', '),
        og: metadata.openGraph ? {
          ...metadata.openGraph,
          url: '',
          image: metadata.openGraph.images[0] || '',
          locale: '',
          author: '',
          type: ''
        } : undefined,
        twitter: metadata.twitter ? {
          ...metadata.twitter,
          creator: '' // Add a default empty string for the required 'creator' property
        } : undefined
      }} />
      <SchemaMarkup schema={schema} />
    </>
  );
}