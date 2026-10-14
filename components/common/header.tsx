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
            nav_link: '/luxury-residential-commercial-property-developer/panchshil-realty'
        },
        {
            nav_name: 'Contact',
            nav_link: '/retail-and-office-spaces-at-sb-road-pune/contact-us'
        },
    ]

    return (
        <header className="fixed top-0 w-full z-5 bg-white">
            
        </header>
    )
}