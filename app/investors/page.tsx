import {
  getMetaData,
  getBanner
} from '@/lib/common';

import {
  getInvestors
} from '@/lib/investors';

import InvestorPage from "@/components/pages/investors";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [ meta_data, banner ] = await Promise.all([
    getMetaData("Project Developer"),
    getBanner("Home")
  ])

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  const investors = await getInvestors();

  return (
    <InvestorPage
    investors={investors}
    />
  )
}