"use client";

import Link from 'next/link'
import { GET_BLOG_POSTS } from '@/queries/query';
import Image from 'next/image';
import { ImageType } from '@/types/image'

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/client";

interface BlogProps {
  items: {
    title: string
    description: string
    blogBanner: ImageType
    postLink: string
  }[]
}

const BlogCollection = () => {
  const { error, data } = useSuspenseQuery<{ blogCollection: BlogProps }>(GET_BLOG_POSTS);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className='flex flex-wrap w-full my-6'>
      {data?.blogCollection.items.map((item, index) => (
        <li className='p-4 list-none w-1/2' key={item.title + index}>
          <Link href={`/blog/${item.postLink}`}>
            <Image
              className='m-auto mb-4'
              src={item.blogBanner.url}
              alt={item.title}
              width={(item.blogBanner.width / 2)}
              height={item.blogBanner.height / 2}
            />
            <h2 className="h-20 text-3xl lg:text-4xl tracking-wider font-bold text-gray-900 mb-4">{item.title}</h2>
            <div className='my-4'>
              <p>{item.description}</p>
            </div>
            <p className='mt-2'>Read more</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogCollection;