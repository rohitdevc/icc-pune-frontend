"use client"

import Image from "next/image"

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { AboutDevelopment, AboutLandmark, AboutLandmarkIntroduction, AboutManagement, AboutManagementIntroduction, AboutOccupantIntroduction, Banner } from "@/types/api";

type Props = {
    banner: Banner
    management_introduction: AboutManagementIntroduction
    managements: AboutManagement[]
    landmark_introduction: AboutLandmarkIntroduction
    landmarks: AboutLandmark[]
    occupant_introduction: AboutOccupantIntroduction
    developments: AboutDevelopment[]
}

export default function AboutUsPage({
    banner,
    management_introduction,
    managements,
    landmark_introduction,
    landmarks,
    occupant_introduction,
    developments
}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <>
        <Header />
        <main>
            
        </main>
        <Footer />
        </>
    )
}