"use client"

import Image from "next/image"

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { Development } from "@/types/api";

type Props = {
    project: Development
}

export default function ProjectPage({
    project
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