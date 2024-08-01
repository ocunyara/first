import { Suspense } from "react";
import { HeroBanner } from "@/app/components/HeroBanner"
import { PeopleList } from '@/app/components/People'

export default async function Page() {
  return <>
    <HeroBanner />
    <Suspense fallback={"Loading..."}>
      <PeopleList />
    </Suspense>
  </>
}