"use client"

import Image from "next/image"

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { AboutDevelopment, AboutLandmark, AboutLandmarkIntroduction, AboutManagement, AboutManagementIntroduction, AboutOccupantIntroduction, Banner } from "@/types/api";

import { useState, useEffect } from "react";
import nl2br from "nl2br";
import parser from 'html-react-parser';

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
    const [headerHeight, setHeaderHeight] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector("header");
        const footer = document.querySelector("footer");

        if (!header || !footer) return;

        const updateHeights = () => {
            setHeaderHeight(header.getBoundingClientRect().height);
            setFooterHeight(footer.getBoundingClientRect().height);
        };

        const observer = new ResizeObserver(updateHeights);

        observer.observe(header);
        observer.observe(footer);
        updateHeights();

        return () => observer.disconnect();
    }, []);

    return (
        <>
        <Header />
        <main style={{
            marginTop: `${headerHeight}px`,
            marginBottom: `${footerHeight}px`,
            minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`
        }}>
            <Image src={banner.banner_image_url} alt={banner.banner_image_caption || "ICC Pune"} width={1920} height={1080} className="w-screen md:h-screen" />
            <section className="bg-black text-white px-5 sm:px-10 md:px-15 lg:px-20 lg:pl-[30%] py-20 flex flex-col gap-10" id="overview">
                <h2 className="uppercase text-2xl">Overview</h2>
                <p className="text-sm leading-6">The International Convention Centre (ICC) is a mixed-use development known as one of the most extensive composite trade and convention centers in South Asia. ICC is located at Senapati Bapat Road, in the heart of Pune and spans across ~ 2.2 million sq. ft. of area. It offers a conducive atmosphere for infinite opportunities for trade and business alliances.
                
                <br />
                <br />
                ICC, the consortium of dynamic corporates, accommodates innumerable business support requirements and an array of other amenities designed to bring technically sound, energy-efficient infrastructure.
                <br />
                <br />
                ICC Tech Park and ICC Trade Tower are built to meet workspace requirements and are home to some of the world’s leading corporates. The Pavillion comprises corporate workspaces that cater to contemporary corporate demands and a mall designed to offer the best in shopping and entertainment. JW Marriott Pune suitably complements the business and trade environs of the International Convention Centre.</p>
            </section>
            {
                management_introduction && (
                <section className="bg-[#464646] text-white px-5 sm:px-10 md:px-15 lg:px-20 lg:pl-[30%] py-20 flex flex-col gap-10" id="management">
                    <h2 className="uppercase text-2xl">{management_introduction.introduction_caption}</h2>
                    <p className="text-sm leading-6">{parser(nl2br(management_introduction.introduction_description))}</p>
                    {
                        managements && managements.length > 0 && (
                        <ul className="flex flex-col gap-3 list-disc list-inside text-sm">
                            {
                                managements.map((management, key) => (
                                    <li key={key}>{management.management_name}, {management.management_designation}</li>
                                ))
                            }
                        </ul>
                        )
                    }
                </section>
            )
            }
            {
                landmark_introduction && (
                    <section className="bg-[#58595B] text-white px-5 sm:px-10 md:px-15 lg:px-20 lg:pl-[30%] py-20 flex flex-col gap-10" id="location">
                        <h2 className="uppercase text-2xl">{landmark_introduction.introduction_caption}</h2>
                        <p className="text-sm leading-6">{parser(nl2br(landmark_introduction.introduction_description))}</p>
                        <h3 className="text-xl">Distance Chart</h3>
                        {
                            landmarks && landmarks.length > 0 && (
                                <ul className="flex flex-col gap-3 text-sm">
                                {
                                    landmarks.map((landmark, key) => (
                                        <li key={key} className="flex justify-between max-w-screen w-xs md:w-sm">
                                            <span>{landmark.landmark_name}</span>
                                            <span>: {landmark.landmark_distance}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                        }
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1891.424298153635!2d73.8291719!3d18.5357428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06ce5555555%3A0xd8f30539fc95f1b4!2sMCCIA%20Trade%20Tower!5e0!3m2!1sen!2sin!4v1610606749209!5m2!1sen!2sin" className="h-100 w-full md:w-[85%]"></iframe>
                    </section>
                )
            }
            {
                occupant_introduction && (
                    <section className="bg-[#818286] text-white px-5 sm:px-10 md:px-15 lg:px-20 lg:pl-[30%] py-20 flex flex-col gap-10" id="clients">
                        <h2 className="uppercase text-2xl">{occupant_introduction.introduction_caption}</h2>
                        <p className="text-sm leading-6">{parser(nl2br(occupant_introduction.introduction_description))}</p>
                        {
                            developments && developments.length > 0 && developments.map((development, key) => (
                            <div key={key} className="flex flex-col gap-5">
                                <h3 className="text-xl">{development.development_name}</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-sm">
                                    {
                                        development.occupants_data.map((occupant, sub_key) => (
                                            <li key={sub_key}>{occupant}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            ))
                        }
                    </section>
                )
            }
        </main>
        <Footer />
        </>
    )
}