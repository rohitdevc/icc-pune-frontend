"use client"

import Image from "next/image"

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { Project, ProjectDeveloperIntroduction } from "@/types/api";

type Props = {
    introduction: ProjectDeveloperIntroduction
    projects: Project[]
}

export default function ProjectDeveloperPage({
    introduction,
    projects
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