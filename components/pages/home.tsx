"use client"

import Image from "next/image"

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import Link from "next/link";
import { Banner } from "@/types/api";

type Props = {
    banner: Banner
}

export default function HomePage({banner}: Props) {
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