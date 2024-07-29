import { Suspense } from 'react'
import { BlogCollection } from '@/app/components/Blog'

const Page = () => {

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="container mx-auto">
        <BlogCollection/>
      </div>
    </Suspense>
  );
};

export default Page;