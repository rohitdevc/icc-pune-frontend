"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropdown, IoIosMenu } from "react-icons/io";

export default function Header() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [menuState, updateMenuState] = useState(false);

    const nav_options = [
        {
            nav_name: 'About',
            nav_link: '/about-us',
            nav_colour_code: '#58595b',
            nav_sub_links: [
                {
                    nav_name: 'Overview',
                    nav_link: '/about-us#overview',
                    nav_sub_links: []
                },
                {
                    nav_name: 'Management',
                    nav_link: '/about-us#management',
                    nav_sub_links: []
                },
                {
                    nav_name: 'Location',
                    nav_link: '/about-us#location',
                    nav_sub_links: []
                },
                {
                    nav_name: 'Occupants',
                    nav_link: '/about-us#clients',
                    nav_sub_links: []
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

    const [activeFirstNav, updateActiveFirstNav] = useState(-1);

    const [activeSecondNav, updateActiveSecondNav] = useState(-1);

    const updateMobileMenu = (key: number) => {
        if(activeFirstNav >= 0) {
            updateActiveFirstNav(-1)
        } else {
            updateActiveFirstNav(key)
        }
    }

    return (
        <header className="fixed top-0 w-full z-5 bg-white">
            <div className="relative">
                <div className="flex items-center justify-between pr-5 sm:px-10 md:px-15 xl:px-25 2xl:px-40">
                    <Link href="/" className="bg-[#ececec] px-5 py-3 w-[130px] lg:w-auto">
                        <Image src={`${basePath}/images/icc-logo.png`} alt="ICC Pune logo" width={155} height={60} className="object-contain" />
                    </Link>
                    {
                        nav_options && nav_options.length > 0 && (
                            <ul className="hidden lg:flex text-white uppercase text-xs" onMouseLeave={() => {updateActiveFirstNav(-1); updateActiveSecondNav(-1) } }>
                                {
                                    nav_options.map((nav_option, key) => (
                                        <li key={key} className="relative">
                                            {
                                                nav_option.nav_link ? (
                                                    <Link className="py-3 px-10" href={nav_option.nav_link} style={{backgroundColor: `${nav_option.nav_colour_code}`}} onMouseEnter={() => { updateActiveFirstNav(key); updateActiveSecondNav(-1) }}>{nav_option.nav_name}</Link>
                                                ) : (
                                                    <span className="cursor-pointer py-3 px-10" style={{backgroundColor: `${nav_option.nav_colour_code}`}} onMouseEnter={() => { updateActiveFirstNav(key); updateActiveSecondNav(-1) }}>{nav_option.nav_name}</span>
                                                )
                                            }
                                            {
                                                nav_option.nav_sub_links && nav_option.nav_sub_links.length > 0 && (
                                                    <ul className={`absolute left-0 top-4 flex flex-col mt-3 text-[10px] transition-all duration-200 origin-top ${activeFirstNav === key ? 'scale-y-100' : 'scale-y-0'}`} onMouseEnter={() => updateActiveFirstNav(key)}>
                                                        {
                                                            nav_option.nav_sub_links.map((nav_sub_link, nav_sub_link_key) => (
                                                                <li key={nav_sub_link_key} className="relative border-t border-black">
                                                                    <Link className="py-2 px-10 block whitespace-nowrap" href={nav_sub_link.nav_link} style={{backgroundColor: `${nav_option.nav_colour_code}`}} onMouseEnter={() => updateActiveSecondNav(nav_sub_link_key)}>{nav_sub_link.nav_name}</Link>
                                                                    {
                                                                        nav_sub_link.nav_sub_links && nav_sub_link.nav_sub_links.length > 0 && (
                                                                            <ul className={`absolute -right-58 top-0 flex flex-col text-[10px] transition-all duration-200 origin-left ${activeSecondNav === nav_sub_link_key ? 'scale-x-100' : 'scale-x-0'}`} onMouseEnter={() => { updateActiveFirstNav(key); updateActiveSecondNav(nav_sub_link_key) }}>
                                                                                {
                                                                                    nav_sub_link.nav_sub_links.map((nav_sub_link, nav_sub_sub_link_key) => (
                                                                                        <li key={nav_sub_sub_link_key}>
                                                                                            <Link className="py-2 px-10 block whitespace-nowrap border-t border-black" href={nav_sub_link.nav_link} style={{backgroundColor: `${nav_option.nav_colour_code}`}}>{nav_sub_link.nav_name}</Link>
                                                                                        </li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        )
                                                                    }
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                    <IoIosMenu className="lg:hidden text-black cursor-pointer" size={40} onClick={() => { updateMenuState(!menuState) }} />
                </div>
            {
                nav_options && nav_options.length > 0 && (
                    <ul className={`absolute top-15 lg:hidden w-full flex-col justify-center items-center z-2 text-white uppercase text-xs transition-all duration-300 origin-top ${menuState ? 'scale-y-100' : 'scale-y-0'}`}>
                        {
                            nav_options.map((nav_option, key) => (
                                <li key={key} className="relative border-t border-black">
                                    {
                                        nav_option.nav_link ? (
                                            <Link className="py-2 flex justify-center items-center w-full" href={nav_option.nav_link} style={{backgroundColor: `${nav_option.nav_colour_code}`}}>{nav_option.nav_name}</Link>
                                        ) : (
                                            <span className="cursor-pointer py-2 flex justify-center items-center w-full gap-1" style={{backgroundColor: `${nav_option.nav_colour_code}`}} onClick={() => { updateMobileMenu(key); }}>{nav_option.nav_name} <IoMdArrowDropdown size={20} /></span>
                                        )
                                    }
                                    {
                                        key === 1 && nav_option.nav_sub_links && nav_option.nav_sub_links.length > 0 && (
                                            <ul className={`z-3 w-full flex flex-col text-[10px] transition-all duration-200 origin-top ${activeFirstNav === key ? 'scale-y-100 max-h-96' : 'scale-y-0 max-h-0'}`}>
                                                {
                                                    nav_option.nav_sub_links.map((nav_sub_link, nav_sub_link_key) => (
                                                        <li key={nav_sub_link_key} className="relative border-t border-black">
                                                            <Link className="py-2 flex justify-center items-center w-full whitespace-nowrap" href={nav_sub_link.nav_link} style={{backgroundColor: `${nav_option.nav_colour_code}`}}>{nav_sub_link.nav_name}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            </div>
        </header>
    )
}