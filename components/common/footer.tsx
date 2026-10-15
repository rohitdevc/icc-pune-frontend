"use client"

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { TfiClose } from "react-icons/tfi";

export default function Footer() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [showDisclaimer, updateShowDisclaimer] = useState(false);

    return (
        <>
        <footer className="fixed bottom-0 w-full z-5 bg-white flex items-center justify-between px-2 sm:px-10 md:px-15 lg:px-20 xl:px-25 2xl:px-40 uppercase text-[10px] md:text-xs">
            <div className="px-5 py-2 w-[130px] md:w-auto">
                <Image src={`${basePath}/images/mccia.png`} alt="MICCIA logo" width={155} height={67} className="object-contain w-full h-full" />
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
                <ul className="flex gap-3 text-[#00498d] justify-end">
                    <li>
                        <Link href={`${basePath}/investors`}>Investors</Link>
                    </li>
                    <li>|</li>
                    <li onClick={() => updateShowDisclaimer(true)}>
                        <span className="cursor-pointer">Disclaimer</span>
                    </li>
                </ul>
                <p className="text-[#939598]">COPYRIGHT: ICC REALTY (I) PVT. LTD. {new Date().getFullYear()}</p>
            </div>
        </footer>
        <section className={`fixed top-0 left-0 h-screen overflow-y-auto w-full p-5 md:p-10 transition-all duration-300 origin-top text-black bg-black/50 z-5 ${showDisclaimer ? 'scale-y-100' : 'scale-y-0'}`}>
            <div className="bg-white relative max-w-screen md:w-2xl lg:w-5xl mx-auto py-10 px-10 flex flex-col gap-5">
                <TfiClose size={20} className="absolute right-5 top-5 cursor-pointer" onClick={() => updateShowDisclaimer(false)}/>
                <h2 className="uppercase text-3xl text-center">Disclaimer</h2>
                <div className="text-sm flex flex-col gap-4">
                    <p>Any person logging on to or using the site (“the Visitor”) has unconditionally accepted the terms and conditions of use and these constitute a binding and enforceable agreement between the visitor and ICC Realty (I) Pvt. Ltd.</p>
                    <p>1. The information on this website is presented as general information and no representation or warranty is expressly or impliedly given as to its accuracy, completeness or correctness.</p>
                    <p>2. The visitor is presumed to have read the terms and conditions of the website and is deemed to have agreed, understood and accepted unconditionally all the terms, conditions, procedures and risks of logging onto the website and cannot claim, at any time, ignorance of any or all of them. All relationships of any visitor of this website wheresoever’s situated is governed by and in accordance with the laws and jurisdiction of Mumbai, India.</p>
                    <p>3. ICC Realty (I) Pvt. Ltd uses all diligence, skill and expertise available to provide information on this website but does not accept or undertake any express or implied warranty of any nature whatsoever and ICC Realty (I) Pvt. Ltd disclaims all or any errors and mistakes to the fullest extent. ICC Realty (I) Pvt. Ltd does not warrant that the information offered will be error-free, or that the defects will be corrected, or that this site or the server that makes it available are or will be free of viruses or other harmful components. ICC Realty (I) Pvt. Ltd shall not be under any obligation to ensure compliance or handle complaints.</p>
                    <p>4. The ICC Realty (I) Pvt. Ltd website may unintentionally include inaccuracies or errors with respect to the description of a plot/flat size, site plan, floor plan, a rendering, a photo, the elevation, prices, taxes, adjacent properties, amenities, design guidelines, completion dates, features, zoning, buyer incentives etc. Square footage and room sizes are approximate and may vary.</p>
                    <p>5. The plans, specifications, images and other details herein are only indicative and ICC Realty (I) Pvt. Ltd reserves the right to change any or all of these in the interest of the project/development. The website does not constitute an offer and/or contract of any nature whatsoever. Any purchase/leave and license in any project shall be governed by the terms of the agreement entered into between the parties and no details mentioned on this website shall govern the transaction. ICC Realty (I) Pvt. Ltd and its respective subsidiaries and affiliates, and their respective officers, directors, partners, employees, agents, managers, trustees, representatives or contractors of any of them, related thereto and any successors or assigns of any of the foregoing shall not be liable for any direct, indirect, actual, punitive, incidental, special, consequential damages or economic loss whatsoever, arising from or related to the use of or reliance on this website. ICC Realty (I) Pvt. Ltd reserves the right to alter, amend and vary the layout, plans, and specifications or feature without prior notice or obligation, but subject to the approval of the competent authorities as applicable.</p>
                    <p>6. The visitor has, by the act of logging onto the website and/or submitting information or giving his name, address, email addresses as identification to ICC Realty (I) Pvt. Ltd through the website, on phone, fax or e-mail, deemed to have consented and has expressly and irrevocably authorized ICC Realty (I) Pvt. Ltd to use, reveal, analyze or display and transmit all information and documents as may be required by it. The visitor represents and warrants that he has provided true, accurate, current and complete information about himself and if any information is found to be untrue, inaccurate, not current or incomplete, ICC Realty (I) Pvt. Ltd has the right to take any action it deems appropriate without any limitation.</p>
                    <p>7. The visitor represents and warrants that he/she is fully aware of the laws of the country/state he/she resides in and also those of India particularly those governing use, sale, lease, transfer of real estate and the visitor is neither violating nor attempting to violate any law.</p>
                    <p>8. The contents, information and material contained in this website are the exclusive property of ICC Realty (I) Pvt. Ltd and are protected by copyright and intellectual property laws. No person shall use, copy, reproduce, distribute, initiate, publish, display, modify, create derivative works or database, use, transmit, upload, exploit, sell or distribute the same in whole or in part or any part thereof without prior express written permission from ICC Realty (I) Pvt. Ltd. Facility to print an article or portion of text or material on this website through computer/electronic device does not tantamount to prior written consent.</p>
                    <p>9. Notwithstanding anything stated hereinabove or in this website, it is clarified, understood and agreed that ICC Realty (I) Pvt. Ltd through this website does not intend to make any offer, proposal or contract as per prevailing laws in India or any similar or relevant law in the country of residence or access of the visitor.</p>
                    <p>10. ICC Realty (I) Pvt. Ltd has the right to reproduce, monitor, disclose any transmission or information received and made to this website. Visitors may be sent information or contacted through the email addresses, phone numbers and postal addresses provided by the visitor on the website. Any visitor who may not desire to receive emails from ICC Realty (I) Pvt. Ltd may give clear instructions.</p>
                    <p>11. The visitor shall not use or post any computer programs in connection with his/her use of the website that contain destructive features such as viruses anomalies, self-destruct mechanisms, time/logic bombs, worm, Trojan horses etc.</p>
                    <p>12. Notwithstanding anything, in no event shall ICC Realty (I) Pvt. Ltd, their promoters, directors, employees and agents be liable to the visitor for any or all damages, losses and causes of action (including but not limited to negligence), errors, injury, whether direct, indirect, consequential or incidental, suffered or incurred by any person/s or due to any use and/or inability to use this site or information or its links, hyperlinks, action taken or abstained or any transmission made through this website.</p>
                    <p>13. Any links to off-site pages or other sites may be accepted by the visitor at his/her option and own risk and ICC Realty (I) Pvt. Ltd assumes no liability for and shall be held harmless from any resulting damages. ICC Realty (I) Pvt. Ltd strongly recommends that the visitors carefully reads the terms and conditions of such linked site(s)</p>
                    <p>14. ICC Realty (I) Pvt. Ltd reserves the right to terminate, revoke, modify, alter, add, and delete any one or more of the terms and conditions of the website. ICC Realty (I) Pvt. Ltd shall be under no obligation to notify the visitor of the amendment to the terms and conditions and the visitor shall be bound by such amended terms and conditions.</p>
                    <p>15. Product cost listed on the website is indicative in nature, actual product cost might be different.</p>
                </div>
            </div>
        </section>
        </>
    )
}