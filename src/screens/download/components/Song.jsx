import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@mui/material";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MdDownload } from "react-icons/md";

function Song({ downloadsData }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  const handlePlay = (index) => {
    console.log("Playing song at index:", index);
    setCurrentSongIndex(index);
  };

  return (
    <div>
      <Container>
        {downloadsData.map((downloadPage) => (
          <div key={downloadPage.id} className="mb-10 pb-10">
            {downloadPage.song.map((song, id) => (
              <div
                key={song.id}
                className="w-full mt-12 h-full md:h-[150px] flex justify-between items-center px-2 md:px-10  bg-slate-100 hover:bg-primary "
              >
                <div className="flex w-full md:w-1/2 mb-4 md:mb-0 ">
                  
                  <Image
                    src={song.image.url}
                    width={80}
                    height={90}
                    placeholder="blur"
                    alt={song.image.url}
                    blurDataURL={song.image.url}
                    className="rounded-xl object-contain"
                  />
                  <div className="  mx-1 md:mx-5">
                    <p className="text-[12px] md:text-xl font-semibold text-secondary">
                      {song.name}
                    </p>

                    <p className="text-base md:text-lg text-footerPrimaryColor">
                      {song.godName}
                    </p>
                    <p className="text-sm text-footerPrimaryColor">{song.time}</p>
                  </div>
                </div>

                <Container>
                  <H5AudioPlayer
                    autoPlay={false}
                    showJumpControls={false}
                    src={song.song.url}
                    onClick={(e) => handlePlay(id)}
                    customAdditionalControls={[
                      <a
                        key="download"
                        href={song.song.url}
                        download
                        style={{ color: "	#101010" }} 
                      >
                        < MdDownload className="text-[20px]"/>
                      </a>,
                        
                    ]}
                  />
                </Container>
              </div>
            ))}
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Song;







