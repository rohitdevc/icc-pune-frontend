"use client"

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Footer() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <>
        <footer className="fixed bottom-0 w-full z-5 bg-white flex items-center justify-between px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-40 uppercase text-xs">
            <div className="px-5 py-2">
                <Image src={`${basePath}/images/mccia.png`} alt="MICCIA logo" width={155} height={67} className="object-contain" />
            </div>
            <div className="flex flex-col gap-3">
                <ul className="flex gap-3 text-[#00498d] justify-end">
                    <li>
                        <Link href={`${basePath}/investors`}>Investors</Link>
                    </li>
                    <li>|</li>
                    <li>
                        <span className="cursor-pointer">Disclaimer</span>
                    </li>
                </ul>
                <p className="text-[#939598]">COPYRIGHT: ICC REALTY (I) PVT. LTD. {new Date().getFullYear()}</p>
            </div>
        </footer>
        </>
    )
}