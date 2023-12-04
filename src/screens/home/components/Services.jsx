import React , { useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const Services = ({ data }) => {
 
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    setDetail(data?.servicePages);
  }, [data?.servicePages]);


  return (
    <section>
      <h2 className="text-center justify-between items-center text-xl md:text-2xl lg:text-3xl font-semibold my-5">
        Our{" "}
        <span className="text-primary underline underline-offset-4 decoration-secondary">
          Services
        </span>
      </h2>
      <Swiper
        loop
        slidesPerView={5}
        spaceBetween={200}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className=" w-full py-2 "
      >
        <div className="flex  gap-5 justify-center">
          {/* Map through unique poojas */}
          {detail.map((item, i) => (
            <SwiperSlide
              key={i}
              className="cursor-pointer hover:scale-110 delay-150 transition-all"
            >
              
              <Link href={`/service/${item.slug}`}>
                <div className="h-30 w-30 md:h-80 md:w-60 my-5 mx-2 flex justify-center flex-col">
                  <div className="h-60 w-60 bg-primary rounded-t-lg flex  justify-center ">
                    <div className=" h-52 w-52 rounded-xl justify-center my-5 mx-2 b">
                      <Image
                        src={item.image?.url}
                        width={100}
                        height={100}
                        alt="Pandit ji oncall"
                        className="justify-center w-full h-full object-cover rounded-full  border-4"
                      />
                    </div>
                  </div>
                  <div className=" h-20 bg-secondary w-60 rounded-b-lg text-white p-3 flex items-center shadow-lg   justify-center text-center">
                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>


    </section>
  );
};

export default Services;


