import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";

const HeroBanner = ({ data }) => {
  // console.log(data.homePages[0].banner);
  return (
    <section>
      <Swiper
        loop
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="h-72 lg:h-96 z-0"
      >
        {data.homePages[0].banner.map((item, i) => (
          <SwiperSlide
            className="bg-gradient-to-r from-primary to-primaryDark w-full h-72 md:h-96 p-2"
            key={i}
          >
            <Image
              src={item.url}
              alt="Call Pandit JI"
              // objectFit="cover"
              width={1440}
              height={100}
              className="w-full md:h-full object-cover rounded-lg h-full "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
