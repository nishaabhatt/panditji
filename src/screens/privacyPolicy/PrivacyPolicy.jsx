
import React from "react";
import Head from "next/head";
import { Container } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <Container>
      <Head>
        <title>Your Company - Privacy Policy</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <section className="prose">
        {/* privacy policy content  */}
        <div className="flex flex-row">
            <p className="text-[16px]">Last Updated: </p> <span className="inline text-blue-400 ml-4">[Date]</span>
        </div>
        <div className=" mt-10">
            <ul className="list-decimal">
                <li className="font-bold text-[18px] md:text-[24px]">Introduction</li>
                <p className="text-[14px] md:text-[14px] text-gray-500 my-5">Welcome to [Your Company/Website Name] . This Privacy Policy is designed to help you understand how we collect, use, share, and safeguard your personal information. By using our website or services, you agree to the terms outlined in this policy.</p>
                 
                <li className="font-bold text-[18px] md:text-[24px]">Information We Collect</li>
                <ul>
                    <li className="font-bold text-[16px] md:text-[20px] my-2">a. Personal Information</li>
                    <p className="text-[14px] md:text-[16px] text-gray-500 my-5">We may collect personal information that you provide directly, such as your name, email address, and other contact details when you:</p>
                     <ul className="list-disc">
                        <li className="md:text-[14px] text-gray-500">Create an account</li>
                        <li className="md:text-[14px] text-gray-500">Subscribe to our newsletter</li>
                        <li className="md:text-[14px] text-gray-500">Contact us through forms or customer support</li>
                     </ul>
                
                <li className="font-bold text-[18px] md:text-[24px] mt-4">b. Automatically Collected Information</li>
                <p className="text-[14px] md:text-[16px] text-gray-500 my-5">We may also automatically collect information about your use of our website, including:</p>
                <ul className="list-disc">
                    <li className="md:text-[14px] text-gray-500">IP address</li>
                    <li className="md:text-[14px] text-gray-500">Browser type</li>
                    <li className="md:text-[14px] text-gray-500">Device information</li>
                    <li className="md:text-[14px] text-gray-500">Usage patterns</li>
                </ul>
                </ul>
                <li className="font-bold text-[18px] md:text-[24px] my-4"> How We Use Your Information</li>
                <p className="text-[14px] md:text-[16px] text-gray-500 my-5">We use your information for various purposes, including but not limited to:</p>
                <ul className="list-disc">
                    <li className="md:text-[14px] text-gray-500">Providing and improving our services</li>
                    <li className="md:text-[14px] text-gray-500">Personalizing your experience</li>
                    <li className="md:text-[14px] text-gray-500">Communicating with you</li>
                    <li className="md:text-[14px] text-gray-500">Analyzing usage patterns</li>
                </ul>
                <li className="font-bold text-[18px] md:text-[24px] my-4">Cookies and Similar Technologies</li>
                <p className="text-[14px] md:text-[16px] text-gray-500 my-5">We use cookies and similar technologies to enhance your experience and collect information about your usage patterns. You can manage cookie preferences through your browser settings.</p>
                <li className="font-bold text-[18px] md:text-[24px] my-4">How We Share Your Information</li>
                <p className="text-[14px] md:text-[16px] text-gray-500 my-5">We may share your information with third parties for purposes such as:</p>
                <ul className="list-disc">
                    <li className="md:text-[14px] text-gray-500">Service providers</li>
                    <li className="md:text-[14px] text-gray-500">Legal requirements</li>
                    <li className="md:text-[14px] text-gray-500">Business transactions</li>
                </ul>
                <p className="text-[14px] md:text-[16px] text-gray-500 my-5">We do not sell your personal information.</p>
                <li className="font-bold text-[18px] md:text-[24px] my-4">Your Choices</li>
                <p className="text-[14px] md:text-[16px] text-gray-500 my-5">You have the right to:</p>
                <ul className="list-disc">
                    <li className="md:text-[14px] text-gray-500">Access, correct, or delete your personal information</li>
                    <li className="md:text-[14px] text-gray-500">Opt-out of marketing communications</li>
                    <li className="md:text-[14px] text-gray-500">Disable cookies</li>
                </ul>
                <li className="font-bold text-[18px] md:text-[24px] my-4">Security</li>
                <p className="text-[14px] md:text-[16px] text-gray-500 my-5">We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction.</p>
                <li className="font-bold text-[18px] md:text-[24px] my-4">Children&apos;s Privacy</li>
                <p className="text-[14px] md:text-[16px] text-gray-500 my-5">Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.</p>
                <li className="font-bold text-[18px] md:text-[24px] my-4">Changes to this Privacy Policy</li>
                <p className="text-[14px] md:text-[16px] text-gray-500 my-5">We may update this Privacy Policy to reflect changes in our practices. We will notify you of any significant updates.</p>
               <li className="font-bold text-[18px] md:text-[24px] my-4">Contact Us</li>
               <p className="text-[14px] md:text-[16px] text-gray-500 my-5">If you have any questions or concerns about this Privacy Policy, please contact us at [your contact email].</p>
            
            </ul>
        </div>
      </section></Container>  
    </div>
  );
};

export default PrivacyPolicy;

