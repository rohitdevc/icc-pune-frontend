"use client"

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { Investor } from "@/types/api";

import { useState, useEffect } from "react";
import Link from "next/link";

import { FaFilePdf } from "react-icons/fa6";

type Props = {
    investors: Investor[]
}

export default function ProjectDeveloperPage({
    investors
}: Props) {
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
        <main style={{
            marginTop: `${headerHeight}px`,
            marginBottom: `${footerHeight}px`,
            minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`
        }}>
            <section className="bg-black text-white px-5 sm:px-10 md:px-15 lg:px-20 lg:pl-[20%] xl:pl-[30%] py-10 flex flex-col gap-10">
                <h1 className="text-3xl uppercase">Investors</h1>
                {
                    investors && investors.length > 0 && investors.slice(0, 2).map((investor, key) => (
                        <div key={key} className="text-sm flex flex-col gap-3">
                            <h2 key={key} className="font-bold uppercase">{investor.category_name}</h2>
                            {
                                investor.reports_data && investor.reports_data.length > 0 && (
                                    <ul className="flex flex-col gap-2">
                                        {
                                            investor.reports_data.map((reports, sub_key) => (
                                                <li key={sub_key}>
                                                    <Link href={reports.report_pdf_url} target="_blank" className="flex gap-2">
                                                    <FaFilePdf size={17} />
                                                    <span>{reports.report_name}</span>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    ))
                }
                <div className="text-sm flex flex-col gap-1">
                    <div className="flex gap-2">
                        <h4 className="w-15 shrink-0">Name</h4>
                        <p className="font-bold flex-1">: IDBI Trusteeship Services Limited</p>
                    </div>
                    <div className="flex gap-2">
                        <h4 className="w-15 shrink-0">Address</h4>
                        <p className="font-bold flex-1">: Asian Building, Ground Floor, 17, R. Kamani Marg, Balard Estate, Mumbai: 400 001</p>
                    </div>
                    <div className="flex gap-2">
                        <h4 className="w-15 shrink-0">Phone</h4>
                        <p className="font-bold flex-1">: <Link href="tel:+912240807018" className="text-[lightblue]">+91 22 4080 7018</Link></p>
                    </div>
                </div>
                <div className="text-sm flex flex-col gap-3">
                    <h2 className="font-bold uppercase">INVESTOR GRIEVANCE REDRESSAL</h2>
                    <p className="leading-6">The investor grievance redressal cell will monitor the investor’s complaint, under the supervision of the Compliance Officer, and have the same redressed at the earliest.</p>
                    <p className="leading-6">Investors wishing to register a complaint, may approach the company’s Compliance Officer:</p>
                    <div className="flex gap-2">
                        <h4 className="w-15 shrink-0">Name</h4>
                        <p className="font-bold flex-1">: Mr. Chinmay Kulkarni</p>
                    </div>
                    <div className="flex gap-2">
                        <h4 className="w-15 shrink-0">Address</h4>
                        <p className="font-bold flex-1">: Tech Park One, Tower 'E', Next to Don Bosco School, Off Airport Road, Yerwada, Pune: 411 006</p>
                    </div>
                    <div className="flex gap-2">
                        <h4 className="w-15">Email</h4>
                        <p className="font-bold flex-1">: <Link href="mailto:secretarial@panchshil.com" className="text-[lightblue]">secretarial@panchshil.com</Link></p>
                    </div>
                    <div className="flex gap-2">
                        <h4 className="w-15 shrink-0 shrink-0">Phone</h4>
                        <p className="font-bold flex-1">: <Link href="tel:+912066473100" className="text-[lightblue]">+91 20 6647 3100</Link></p>
                    </div>
                    <div className="flex gap-2">
                        <h4 className="w-15 shrink-0">Fax</h4>
                        <p className="font-bold flex-1">: +91 20 6647 3101</p>
                    </div>
                </div>
                {
                    investors && investors.length > 2 && investors.slice(2).map((investor, key) => (
                        <div key={key} className="text-sm flex flex-col gap-3">
                            <h2 key={key} className="font-bold uppercase">{investor.category_name}</h2>
                            {
                                investor.reports_data && investor.reports_data.length > 0 && (
                                    <ul className="flex flex-col gap-2">
                                        {
                                            investor.reports_data.map((reports, sub_key) => (
                                                <li key={sub_key}>
                                                    <Link href={reports.report_pdf_url} target="_blank" className="flex gap-2">
                                                    <FaFilePdf size={17} />
                                                    <span>{reports.report_name}</span>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    ))
                }
                <div className="text-sm flex flex-col gap-3 max-w-screen md:w-sm">
                    <h2 className="uppercase"><b>CORPORATE IDENTIFICATION NUMBER</b></h2>
                    <p className="flex gap-10"><span>CIN</span> <span>: U45201PN2002PTC143638</span></p>
                </div>
            </section> 
        </main>
        <Footer />
        </>
    )
}