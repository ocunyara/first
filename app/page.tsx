import { HeroBanner } from "@/app/components/HeroBanner";
import { People } from '@/app/components/People'

export default async function Page() {
  return <>
    <HeroBanner />
    <People />
  </>
}