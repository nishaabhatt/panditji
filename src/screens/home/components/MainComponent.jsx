import React from "react";
import Image from "next/image";
import Button from "../../../components/Button";
import { TiArrowShuffle } from "react-icons/ti";
import { MdHealthAndSafety, MdOutlineCastForEducation } from "react-icons/md";
import { HiCurrencyRupee, HiHome } from "react-icons/hi";
import { GiLoveMystery } from "react-icons/gi";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { doTypesOverlap } from "graphql";
import { ClassNames } from "@emotion/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const MainComponent = ({ data }) => {
  console.log(data.homePages[0]?.panditJiProfile[0]?.image[0]?.url);
  return (
    <section className="my-10">
      <div>
        <h3 className="text-center text-xl  font-semibold md:text-2xl lg:text-3xl">
          Consult with{" "}
          <span className="text-primary font-semibold underline underline-offset-4 decoration-secondary">
            expert
          </span>
        </h3>
        <article>
          <p className="text-center px-5 lg:px-20 my-5 font-normal leading-7 md:leading-0 text-sm md:text-lg ">
            {data.homePages[0].consultWithExpertContent}
          </p>
        </article>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <Swiper
          loop
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-80 py-2 md:w-96 lg:w-[40%] relative "
          // style={{ '--swiper-pagination-color': '[#000050]' }}
        >
          {data.homePages[0]?.panditJiProfile?.map((item, i) => (
            <SwiperSlide
              className="bg-gradient-to-r  from-primaryLight flex justify-center gap-2 items-center to-primaryDark h-96 p-2 rounded-xl"
              key={i}
            >
              {/* <div className="bg-secondary   rounded-full my-auto">
                    <IoIosArrowBack className="text-primary" size={20} />
              </div> */}
              <div className="w-full">
                <h4 className="text-center text-xl md:text-2xl font-medium text-secondary py-2">
                  Share Problem Get Solution
                </h4>
                <div className="flex justify-evenly">
                  
                  <div className="w-44 h-full flex flex-col items-center justify-between ">
                    <div className="w-40 h-44">
                      <Image
                        src={item.image[0]?.url}
                        height={150}
                        width={150}
                        alt="profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="my-3">
                      <p className="text-base font-semibold  ">{item.name}</p>
                      <div className="flex justify-center items-center flex-col">
                        <p className="text-base font-medium">Experience</p>
                        <p className="text-base font-semibold">
                          {item.experienceYears}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-40 h-full  flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center gap-2 w-full my-5">
                      <div className="flex justify-start items-center gap-3  w-full  ">
                        <MdHealthAndSafety className="text-secondary text-xl md:text-2xl" />
                        <p className="text-base  capitalize font-medium">
                          {item.expertise[0]}
                        </p>
                      </div>
                      <div className="flex justify-start items-center gap-3  w-full  ">
                        <HiCurrencyRupee className="text-secondary text-xl md:text-2xl" />
                        <p className="text-base capitalize font-medium">
                          {item.expertise[1]}
                        </p>
                      </div>
                      <div className="flex justify-start items-center gap-3  w-full  ">
                        <GiLoveMystery className="text-secondary text-xl md:text-2xl" />
                        <p className="text-base capitalize font-medium">
                          {item.expertise[2]}
                        </p>
                      </div>
                      <div className="flex justify-start items-center gap-3  w-full  ">
                        <HiHome className="text-secondary text-xl md:text-2xl" />
                        <p className="text-base capitalize font-medium">
                          {item.expertise[3]}
                        </p>
                      </div>
                      <div className="flex justify-start items-center gap-3  w-full  ">
                        <MdOutlineCastForEducation className="text-secondary text-xl md:text-2xl" />
                        <p className="text-base capitalize font-medium">
                          {item.expertise[4]}
                        </p>
                      </div>
                    </div>
                    <div className="my-2 text-left w-full">
                      <Button name="Talk Now" />
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* <div className="bg-secondary   rounded-full my-auto">
                    <IoIosArrowForward className="text-primary" size={20} />
              </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination w-[8px] h-[8px] bg-[#00]  absolute bottom-4 inset-x-0"></div>

        <div className="flex justify-center items-center lg:w-1/2 ">
          <div className=" flex flex-col py-5 justify-start items-center md:items-start">
            <h3 className="text-lg md:text-2xl  font-medium py-5">
              Phone Consultation Included
            </h3>
            <div className="flex gap-3">
              <div className="flex flex-col gap-4 py-1 px-2 md:gap-3 md:py-1 h-full text-sm">
                <div className="flex items-center">
                  <div className="w-10">
                    <TiArrowShuffle className="text-secondary text-xl md:text-3xl" />
                  </div>
                  <p className="font-medium text-base">
                    {data.homePages[0].consultationPerks[0]}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10">
                    <TiArrowShuffle className="text-secondary text-xl md:text-3xl" />
                  </div>
                  <p className="font-medium text-base">
                    {data.homePages[0].consultationPerks[1]}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10">
                    <TiArrowShuffle className="text-secondary text-xl md:text-3xl" />
                  </div>
                  <p className="font-medium text-base">
                    {data.homePages[0].consultationPerks[2]}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10">
                    <TiArrowShuffle className="text-secondary text-xl md:text-3xl" />
                  </div>
                  <p className="font-medium text-base">
                    {data.homePages[0].consultationPerks[3]}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10">
                    <TiArrowShuffle className="text-secondary text-xl md:text-3xl" />
                  </div>
                  <p className="font-medium text-base">
                    {data.homePages[0].consultationPerks[4]}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10">
                    <TiArrowShuffle className="text-secondary text-xl md:text-3xl" />
                  </div>
                  <p className="font-medium text-base">
                    {data.homePages[0].consultationPerks[5]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
