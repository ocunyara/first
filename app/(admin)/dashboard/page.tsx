import { Suspense } from "react";
import { PeopleListSSR } from "../../components/People";
export default function Page() {
  return <>
    <Suspense fallback={"Loading..."}>
      <PeopleListSSR />
    </Suspense>
  </>
}
