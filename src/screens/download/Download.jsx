import React from "react";
import Playing from "./components/Playing";
import Playlist from "./components/Playlist";
import Song from "./components/Song";
import { Container } from "@mui/material";
import AudioPlayer from "react-h5-audio-player";

const Download = ({ downloadsData }) => {
  console.log(downloadsData)

  return (
    <div>
      <Container>
           
        
          {/* <Playlist /> */}

          {/* <Playing downloadsData={downloadsData}  /> */}
          <Song downloadsData={downloadsData}/>  

      </Container>
    </div>
  );
};

export default Download;
