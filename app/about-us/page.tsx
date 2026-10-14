import {
  getMetaData,
  getBanner
} from '@/lib/common';

import {
  getAboutManagementIntroduction,
  getAboutManagement,
  getAboutLandmarkIntroduction,
  getAboutLandmarks,
  getAboutOccupantIntroduction,
  getAboutDevelopments
} from '@/lib/about-us';

import AboutUsPage from "@/components/pages/about-us";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

const banner= await getBanner('About Us');

export async function generateMetadata() {
  const meta_data = await getMetaData("About Us");

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  const [
    management_introduction,
    managements,
    landmark_introduction,
    landmarks,
    occupant_introduction,
    developments
  ] = await Promise.all([
    getAboutManagementIntroduction(),
    getAboutManagement(),
    getAboutLandmarkIntroduction(),
    getAboutLandmarks(),
    getAboutOccupantIntroduction(),
    getAboutDevelopments()
  ]);

  return (
    <AboutUsPage
    banner={banner}
    management_introduction={management_introduction}
    managements={managements}
    landmark_introduction={landmark_introduction}
    landmarks={landmarks}
    occupant_introduction={occupant_introduction}
    developments={developments}
    />
  )
}