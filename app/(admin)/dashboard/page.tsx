import { Suspense } from "react";
import { PeopleClient } from "../../components/People";
export default function Page() {
  return <>
    <Suspense fallback={"Loading..."}>
      <PeopleClient />
    </Suspense>
  </>
}
