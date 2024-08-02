'use client'

import {gql} from '@apollo/client';

export const GET_HERO_BANNER = gql`
  query {
    heroBannerCollection {
      items {
       heroBannerTitle
       subTitle
       heroBannerImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        heroBannerDescription
      }
    }
  }
`;

export const GET_BLOG_POSTS = gql`
  query {
    blogCollection {
      items {
        title
        blogBanner {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        postLink
      }
    }
  }
`;

export const GET_BLOG_POST = gql`
 query GetBlogPost($link: String!) {
    blogCollection(where: { postLink: $link }) {
      items {
        title
        blogBanner {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        description {
          json
        }
      }
    }
  }
`;