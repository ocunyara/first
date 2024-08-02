import { Suspense } from "react";
import { PeopleList } from "../../components/People";

export default function Page() {
  return <>
    <Suspense fallback={"Loading..."}>
      <PeopleList />
    </Suspense>
  </>
}
