"use client"

import { Project } from "@/types/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

export default function Header() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [menuState, updateMenuState] = useState(false);

    const openMenu = () => {
        updateMenuState(true);

        document.body.classList.add('overflow-hidden');
    }

    const closeMenu = () => {
        updateMenuState(false);

        document.body.classList.remove('overflow-hidden');
    }

    const nav_options = [
        {
            nav_name: 'About',
            nav_link: '/about-us',
            nav_colour_code: '#58595b',
            nav_sub_links: [
                {
                    nav_name: 'Overview',
                    nav_link: '/about-us#overview'
                },
                {
                    nav_name: 'Management',
                    nav_link: '/about-us#management'
                },
                {
                    nav_name: 'Location',
                    nav_link: '/about-us#location'
                },
                {
                    nav_name: 'Occupants',
                    nav_link: '/about-us#clients'
                }
            ]
        },
        {
            nav_name: 'Developments',
            nav_link: '',
            nav_colour_code: '#818286',
            nav_sub_links: [
                {
                    nav_name: 'ICC Tech Park',
                    nav_link: '/commercial-property-in-pune/icc-tech-park',
                    nav_sub_links: [
                        {
                            nav_name: 'About ICC Tech Park',
                            nav_link: '/commercial-property-in-pune/icc-tech-park'
                        },
                        {
                            nav_name: 'Amenities & Specifications',
                            nav_link: '/commercial-property-in-pune/icc-tech-park#amenities-and-specifications'
                        },
                        {
                            nav_name: 'Plans',
                            nav_link: '/commercial-property-in-pune/icc-tech-park#plans'
                        },
                        {
                            nav_name: 'Image Gallery',
                            nav_link: '/commercial-property-in-pune/icc-tech-park#gallery'
                        },
                    ]
                },
                {
                    nav_name: 'ICC Trade Tower',
                    nav_link: '/commercial-project-at-sb-road-pune/icc-trade-tower',
                    nav_sub_links: [
                        {
                            nav_name: 'About ICC Trade Tower',
                            nav_link: '/commercial-project-at-sb-road-pune/icc-trade-tower'
                        },
                        {
                            nav_name: 'Amenities & Specifications',
                            nav_link: '/commercial-project-at-sb-road-pune/icc-trade-tower#amenities-and-specifications'
                        },
                        {
                            nav_name: 'Plans',
                            nav_link: '/commercial-project-at-sb-road-pune/icc-trade-tower#plans'
                        },
                        {
                            nav_name: 'Image Gallery',
                            nav_link: '/commercial-project-at-sb-road-pune/icc-trade-tower#gallery'
                        },
                    ]
                },
                {
                    nav_name: 'JW Marriott Pune',
                    nav_link: '/luxury-five-star-hotel-in-pune-india/jw-marriott',
                    nav_sub_links: [
                        {
                            nav_name: 'JW Marriott Pune',
                            nav_link: '/luxury-five-star-hotel-in-pune-india/jw-marriott#jw-marriott-pune'
                        },
                        {
                            nav_name: 'Restaurants and Lounges',
                            nav_link: '/luxury-five-star-hotel-in-pune-india/jw-marriott#restaurants-and-lounges'
                        },
                        {
                            nav_name: 'Quan Spa',
                            nav_link: '/luxury-five-star-hotel-in-pune-india/jw-marriott#quan-spa'
                        },
                        {
                            nav_name: 'Guest Suites',
                            nav_link: '/luxury-five-star-hotel-in-pune-india/jw-marriott#guest-suites'
                        },
                        {
                            nav_name: 'Sabha Ballroom',
                            nav_link: '/luxury-five-star-hotel-in-pune-india/jw-marriott#sabha-ballroom'
                        },
                        {
                            nav_name: 'Marriott Club',
                            nav_link: '/luxury-five-star-hotel-in-pune-india/jw-marriott#marriott-club'
                        },
                        {
                            nav_name: 'Image Gallery',
                            nav_link: '/luxury-five-star-hotel-in-pune-india/jw-marriott#gallery'
                        }
                    ]
                },
                {
                    nav_name: 'The Pavillion',
                    nav_link: '/shopping-mall-at-sb-road-pune/the-pavillion',
                    nav_sub_links: [
                        {
                            nav_name: 'About The Pavillion',
                            nav_link: '/shopping-mall-at-sb-road-pune/the-pavillion'
                        },
                        {
                            nav_name: 'Amenities & Specifications',
                            nav_link: '/shopping-mall-at-sb-road-pune/the-pavillion#amenities-and-specifications'
                        },
                        {
                            nav_name: 'Plans',
                            nav_link: '/shopping-mall-at-sb-road-pune/the-pavillion#plans'
                        },
                        {
                            nav_name: 'Image Gallery',
                            nav_link: '/shopping-mall-at-sb-road-pune/the-pavillion#gallery'
                        },
                    ]
                },
            ]
        },
        {
            nav_name: 'Project Developer',
            nav_link: '/luxury-residential-commercial-property-developer/panchshil-realty',
            nav_colour_code: '#a8a9ad',
        },
        {
            nav_name: 'Contact',
            nav_link: '/retail-and-office-spaces-at-sb-road-pune/contact-us',
            nav_colour_code: '#00498d',
        },
    ]

    return (
        <header className="fixed top-0 w-full z-5 bg-white flex items-center justify-between px-5 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-40">
            <div className="bg-[#ececec] px-5 py-3">
                <Image src={`${basePath}/images/icc-logo.png`} alt="ICC Pune logo" width={155} height={60} className="object-contain" />
            </div>
            {
                nav_options && nav_options.length > 0 && (
                    <ul className="flex text-white uppercase text-xs">
                        {
                            nav_options.map((nav_option, key) => (
                                <li key={key}>
                                    {
                                        nav_option.nav_link ? (
                                            <Link className="w-fit py-3 px-10" href={nav_option.nav_link} style={{backgroundColor: `${nav_option.nav_colour_code}`}}>{nav_option.nav_name}</Link>
                                        ) : (
                                            <span className="cursor-pointer w-fit py-3 px-10" style={{backgroundColor: `${nav_option.nav_colour_code}`}}>{nav_option.nav_name}</span>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </header>
    )
}