import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import ReferenceLayout from '../../components/layout/ReferenceLayout';
import { AuthorReference } from './models';

export interface AuthorProps {
  data: {
    author: AuthorReference
  }
}

const Author: FC<AuthorProps> = (
  {
    data: {
      author: { title, subtitle, body, thumbnail, resources }
    }
  }) => {
  return (<ReferenceLayout pageTitle={title} subtitle={subtitle} bodyHtml={body}>
      {{
        figure: (
          <div className="image is-rounded is-96x96">
            <Img className="bio-resourcecard-logo" fluid={thumbnail.childImageSharp.fluid} />
          </div>
        ),
        listing: (
          <div>
            {resources && resources.map(resource => (
              <ResourceCard
                key={resource.slug}
                thumbnail={resource.thumbnail}
                media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
                technologies={{ items: resource.technologies }}
                topics={{ items: resource.topics }}
                date={{ date: resource.date }}
              />
            ))
            }
          </div>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Author;

export const query = graphql`
  query($slug: String!) {
    author(slug: { eq: $slug }) {
      ...ListedAuthorFragment
      resources {
        ...ListedResourceFragment2
      }
    }
  }
`;
