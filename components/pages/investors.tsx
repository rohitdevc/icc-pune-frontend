"use client"

import Image from "next/image"

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { Investor } from "@/types/api";

type Props = {
    investors: Investor[]
}

export default function ProjectDeveloperPage({
    investors
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