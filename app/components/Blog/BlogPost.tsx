"use client";

import Image from 'next/image';
import { ImageType } from '@/types/image'
import { GET_BLOG_POST } from '@/queries/query';
import { useSuspenseQuery } from "@apollo/client";
import { RichText } from "@/app/components/RichText";

interface ProjectProps {
  items: {
    title: string;
    description: {
      json: object
    }
    blogBanner: ImageType;
    link: string;
  }[]
}

interface ProjectsCollectionProps {
  slug: string;
}

const BlogPost = ({ slug }: ProjectsCollectionProps) => {
  const { error, data } = useSuspenseQuery<{ blogCollection: ProjectProps }>(GET_BLOG_POST, {
    variables: { link: slug },
  });

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='mb-6'>
      <Image
        className='w-full'
        src={data.blogCollection.items[0].blogBanner.url}
        alt={data.blogCollection.items[0].blogBanner.title || 'Some test'}
        width={data.blogCollection.items[0].blogBanner.width}
        height={data.blogCollection.items[0].blogBanner.height}
      />
      <h2 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900 my-10 mx-auto max-w-[800px]">{data.blogCollection.items[0].title}</h2>
      <div className='m-auto max-w-[1080px] text-lg'>
        <RichText {...data.blogCollection.items[0].description.json} />
      </div>
    </div>
  );
};

export default BlogPost;