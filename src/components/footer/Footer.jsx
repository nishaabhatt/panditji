import React from "react";
import { VscDebugStart } from "react-icons/vsc";
import { MdPrivacyTip, MdEmail, MdCall } from "react-icons/md";
import { BsShieldFillCheck, BsFacebook } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const Footer = ({ display }) => {
  return (
    <section className="w-full pt-10 bg-footerPrimaryColor">
      <div className="h-full flex justify-evenly items-center flex-wrap">
        <div className=" w-72 h-60 ">
          <div className="text-white text-base font-semibold py-3">
            About
            <span className="mx-2 font-semibold">Us</span>
          </div>
          <p className="text-sm text-textFooter">
            Pandit Ji On Call Offer First Call Consultancy FREE with Expert
            Astrologers. Pandit Ji On Call can help you find answers to all your
            problems. Talking to one of our expert astrologers over the phone
            can resolve your problems and help you find the best solutions for
            your life.
          </p>
        </div>
        <div className="text-left lg:text-center flex-col w-72 h-60">
          <div className="text-white text-base font-semibold  py-3">
            Quick
            <span className="mx-2 font-semibold">Links</span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-start lg:items-center text-textFooter ">
            <p className="text-sm   flex gap-2 items-center cursor-pointer">
              {" "}
              <VscDebugStart className="text-xl" /> <span>About us</span>
            </p>
            <p className="text-sm  flex gap-2 items-center cursor-pointer">
              {" "}
              <VscDebugStart className="text-xl" /> <span>About us</span>
            </p>
            <p className="text-sm  font-medium flex gap-2 items-center cursor-pointer">
              {" "}
              <VscDebugStart className="text-xl" /> <span>About us</span>
            </p>
            <p className="text-sm  font-medium flex gap-2 items-center cursor-pointer">
              {" "}
              <VscDebugStart className="text-xl" /> <span>About us</span>
            </p>
            <p className="text-sm flex gap-2 items-center cursor-pointer">
              {" "}
              <VscDebugStart className="text-xl" /> <span>About us</span>
            </p>
            <p className="text-sm flex gap-2 items-center cursor-pointer">
              {" "}
              <VscDebugStart className="text-xl" /> <span>About us</span>
            </p>
          </div>
        </div>
        <div className="text-left lg:text-center flex-col justify-between items-center w-72 h-60">
          <div className="text-white text-base text-left font-semibold  py-3">
            Secure
          </div>
          <div className=" flex gap-2 justify-start items-center">
            {" "}
            <MdPrivacyTip className="text-3xl text-lime-600 " />
            <div className="text-textFooter">
              <p className="text-base font-semibold">Privacy Protected</p>
              <p className="text-sm text-left">Gurantee</p>
            </div>
          </div>
          <div className=" flex gap-2 justify-start items-center ">
            {" "}
            <BsShieldFillCheck className="text-3xl text-cyan-600" />
            <div className="text-textFooter">
              <p className="text-base font-semibold">Verified Expert</p>
              <p className="text-sm text-left">pandit Jii</p>
            </div>
          </div>
          <div className=" flex gap-2 justify-start   items-center ">
            {" "}
            <RiSecurePaymentLine className="text-3xl text-yellow-500" />
            <div className="text-textFooter">
              <p className="text-base font-semibold">100% Secure</p>
              <p className="text-sm text-left">payments</p>
            </div>
          </div>
        </div>
        <div className=" text-left lg:text-center  flex-col justify-between items-center w-72 h-60">
          <div className="text-white text-left text-base font-semibold  py-3">
            Contact
            <span className="mx-2">Us</span>
          </div>
          <div>
            <div className="flex gap-3 items-center py-2">
              <MdCall className="text-xl text-teal-700" />
              <p className="text-sm text-textFooter">+91 1234567890</p>
            </div>
            <div className="flex gap-3  items-center py-2">
              <MdEmail className="text-xl  text-gray-300" />
              <p className="text-sm text-textFooter"> panditjii@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center py-2">
              <BsFacebook className="text-xl text-sky-600" />
              <p className="text-sm text-textFooter"> pandit Jii</p>
            </div>
            <div className="flex gap-3  items-center py-2">
              <AiFillInstagram className="text-xl text-pink-600" />
              <p className="text-sm text-textFooter"> @Panditjiiofficial</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 flex justify-center items-center bg-footerSecondaryColor">
        <article>
          <p className="text-sm lg:text-base text-textSecondary">
            {" "}
            © Copyright 2022 by callPanditjii.com.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Footer;
