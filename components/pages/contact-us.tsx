"use client"

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { EnquiryFormErrors, EnquiryForm } from "@/types/forms";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import Loader from "@/components/utils/loader";

import { isEmail, isEmpty } from 'validator';

export default function ContactUsPage() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [showLoader, updateLoader] = useState(false);

    const [ip, setIp] = useState("");
    const [errors, setErrors] = useState<EnquiryFormErrors>({});

    const [enquiryForm, setEnquiryForm] = useState<EnquiryForm>({
        enquiry_name: '',
        enquiry_phone_number: '',
        enquiry_email_address: '',
        enquiry_company_name: '',
        enquiry_address: '',
        enquiry_message: '',
        ip_address: ip,
        referral_url: ''
    });

    useEffect(() => {
        async function getIp() {
            const res = await fetch(basePath + "/api/ip");
            const data = await res.json();
            setIp(data.ip);
        }
    
        getIp();
    }, []);

    const handleEnquiryFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setEnquiryForm(prev => ({ ...prev, [name]: value}));
        
        setErrors(prev => ({ ...prev, [name]: undefined}));
    }

    const enquiryNameRef = useRef<HTMLInputElement>(null);
    const enquiryEmailAddressRef = useRef<HTMLInputElement>(null);
    const enquiryPhoneNumberRef = useRef<HTMLInputElement>(null);
    const enquiryCompanyNameRef = useRef<HTMLInputElement>(null);
    const enquiryAddressRef = useRef<HTMLInputElement>(null);
    const enquiryMessageRef = useRef<HTMLTextAreaElement>(null);

    const refMap: Record<string, React.RefObject<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>> = {
        enquiry_name: enquiryNameRef,
        enquiry_email_address: enquiryEmailAddressRef,
        enquiry_phone_number: enquiryPhoneNumberRef,
        enquiry_company_name: enquiryCompanyNameRef,
        enquiry_address: enquiryAddressRef,
        enquiry_message: enquiryMessageRef
    }

    const enquiryFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isEmpty(enquiryForm.enquiry_name)) {
            setErrors({enquiry_name: 'Please enter your name'});
            enquiryNameRef.current?.focus();
            return;
        }

        if(isEmpty(enquiryForm.enquiry_email_address)) {
            setErrors({enquiry_email_address: 'Please enter your email address'});
            enquiryEmailAddressRef.current?.focus();
            return;
        } else if(!isEmail(enquiryForm.enquiry_email_address)) {
            setErrors({enquiry_email_address: 'Please enter a valid email address'});
            enquiryEmailAddressRef.current?.focus();
            return;
        }

        if(isEmpty(enquiryForm.enquiry_phone_number)) {
            setErrors({enquiry_phone_number: 'Please enter your phone number'});
            enquiryPhoneNumberRef.current?.focus();
            return;
        }

        updateLoader(true);

        await new Promise((resolve) => requestAnimationFrame(resolve));

        try {
          const payload = {
            ...enquiryForm,
            ip_address: ip,
            referral_url: window.location.href
          };

          const response = await fetch(basePath + "/api/enquiry-form", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json"
            }
          })

          if (!response.ok) {
            const err = await response.json();

            if(err.error) {
              let error_response = JSON.parse(err.error);

              if(typeof error_response === "object" && error_response !== null && !Array.isArray(error_response)) {
                error_response = Object.values(error_response);

                const { path, msg } = error_response[0][0];

                const error_message = msg;
                const error_path = path;

                if(refMap[error_path]?.current) {
                  
                  refMap[error_path]?.current.focus();
                }
                setErrors({[error_path]: error_message});
              }

              return false;
            }
          }

          const data = await response.json();

          if(data.success) {
            setEnquiryForm({
                enquiry_name: '',
                enquiry_email_address: '',
                enquiry_phone_number: '',
                enquiry_company_name: '',
                enquiry_address: '',
                enquiry_message: '',
                ip_address: '',
                referral_url: window.location.href
            })

            if(!data.result) return false;

            alert('Thank You! We will contact you soon.');
          }
        } catch(error) {
          console.error(error);
        } finally {
          updateLoader(false);
        }
    }

    return (
        <>
        <Header />
        <main>

        </main>
        <Footer />
        <Loader showLoader={showLoader} />
        </>
    )
}