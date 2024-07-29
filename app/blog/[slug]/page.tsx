import { BlogPost } from '@/app/components/Blog'

interface BlogProps {
  params: {
    slug: string;
  };
}

const Blog = ({params: {slug}}: BlogProps) => {
  return <BlogPost slug={slug}></BlogPost>
}

export default Blog;