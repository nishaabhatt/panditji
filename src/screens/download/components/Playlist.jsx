import React from "react";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";

const Playlist = ({downloadsData}) => {
  return (
    <div className="w-full h-32 md:h-40 flex justify-between px-2 md:px-10 items-center ">
      <div className="flex">
        <div className=" w-24  h-20 md:w-32 md:h-28 rounded-lg">
          <Image
            src="/assets/images/homeassets/Rectangle 13.png"
            width={10}
            alt="Call Pandit jii"
            placeholder="blur"
            blurDataURL="/assets/images/homeassets/Rectangle 13.png"
            height={10}
            className=" w-full h-full rounded-lg"
          />
        </div>



<div className=" mx-3 md:mx-5"  >
<p className=" text-base md:text-lg font-semibold">
  Download 
</p>
<p className="text-footerPrimaryColor text-sm md:text-lg">
  maa tujhe salam
</p>
<button className="btn-primary">Play all</button>
</div>



           
        
      
      </div>
      <div className="flex gap-5">
        <BsFillPlayCircleFill className="text-2xl text-secondary" />
        <MdDownloadForOffline className="text-2xl text-secondary" />
      </div>
    </div>
  );
};

export default Playlist;

{
  /* 


</div>
 */
}
