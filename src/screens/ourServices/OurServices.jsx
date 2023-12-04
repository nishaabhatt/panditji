import React from "react";
import Card from "./components/Card";
import { Container } from "@mui/material";

const OurServices = ({ data }) => {
  // console.log(data.poojaServicesPages[0].bannerImage.url);
  console.log(data)

  return (
    <div>
      <Container>
        <Card data={data}/>
      </Container>
    </div>
  );
};

export default OurServices;