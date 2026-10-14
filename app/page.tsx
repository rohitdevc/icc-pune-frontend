import {
  getMetaData,
  getBanner
} from '@/lib/common';

import HomePage from "@/components/pages/home";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

const banner= await getBanner('Home');

export async function generateMetadata() {
  const meta_data = await getMetaData("Home");

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  return (
    <HomePage banner={banner}
    />
  )
}