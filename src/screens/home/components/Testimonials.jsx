import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = ({ data }) => {
  // console.log(data.homePages[0].testimonial.image);
  return (
    <section className="px-5">
      <h3 className="text-xl md:text-2xl lg:text-3xl  text-center font-semibold text-primary py-5 
      underline underline-offset-4 decoration-secondary">
        Testimonials
      </h3>
      <Swiper
        breakpoints={{
          622: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        loop
      >
        {data.homePages[0].testimonial?.map((item, i) => (
          <SwiperSlide
            className="text-textSecondary flex justify-center"
            key={i}
          >
            <div className="w-80 bg-secondary h-52 rounded relative">
              <div
                className="bg-primary w-60 h-72"
                style={{
                  clipPath: "polygon(0 0, 100% 0%, 80% 90%, 0 66%)",
                  filter: "brightness(90%) blur(2px)",
                }}
              ></div>
              <div className="absolute top-0 w-72 ">
                <div className="flex justify-evenly items-center p-2">
                  <div className="h-16 w-16 bg-white rounded-full">
                    <Image
                      src={item.image?.url}
                      height={100}
                      width={100}
                      alt="profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="text-base ">
                    <p>{item.name}</p>
                    {/* <p>{item.dob}</p> */}
                  </div>
                </div>
                <article className="px-2 flex justify-center">
                  <p className="text-sm">{item.comment}</p>
                </article>
                <div className="flex justify-center items-center">
                  <AiFillStar className="text-secondary text-2xl" />
                  <AiFillStar className="text-secondary text-2xl" />
                  <AiFillStar className="text-secondary text-2xl" />
                  <AiFillStar className="text-secondary text-2xl" />
                  <AiOutlineStar className="text-2xl" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
