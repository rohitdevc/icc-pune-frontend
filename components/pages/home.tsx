"use client"

import Image from "next/image"

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { Banner } from "@/types/api";

import { useState, useEffect } from "react";

type Props = {
    banner: Banner
}

export default function HomePage({banner}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

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
        <main className="bg-cover bg-center bg-no-repeat relative"
        style={{
            backgroundImage: `url(${banner.banner_image_url})`,
            marginTop: `${headerHeight}px`,
            marginBottom: `${footerHeight}px`,
            minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`
        }}>
            <video className="max-w-screen mx-auto" controls autoPlay muted loop style={{height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`}}>
                <source src={banner.banner_video_url}></source>
            </video>
            <Image className="absolute right-5 md:right-10 bottom-5 md:bottom-10 w-10 md:w-15" src={`${basePath}/images/panchshil-logo.jpg`} width={143} height={143} alt="Panchshil Logo" />
        </main>
        <Footer />
        </>
    )
}