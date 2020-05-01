import React from 'react';

import { Link } from 'gatsby';

interface ResourceCardTopic {
  label: string;
  slug: string;
}

export type ResourceCardTopics = ResourceCardTopic[];

export interface ResourceCardTopicsProps {
  items: ResourceCardTopics
}

export const ResourceCardTopics: React.FC<ResourceCardTopicsProps> = (
  { items }
) => (
  <>
    {items.map(topic => (
      <span data-testid={`rcto-key`} className="level-item bio-common-card-references" key={topic.slug}>
        <div className="tags">
          <span className="tag is-rounded">
            <Link to={topic.slug} className="has-text-primary">
              {topic.label}
            </Link>
          </span>
        </div>
      </span>
    ))}
  </>
);
