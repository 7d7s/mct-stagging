// components/SchemaMarkup.tsx
import { FC } from 'react';
interface SchemaMarkupProps {
  schema: Record<string, unknown>;
}

export const SchemaMarkup: FC<SchemaMarkupProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
