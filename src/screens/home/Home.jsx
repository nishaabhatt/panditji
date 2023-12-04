import React, { useEffect, useState } from "react";
import Faqs from "./components/Faqs";
import HeroBanner from "./components/HeroBanner";
import MainComponent from "./components/MainComponent";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import { servicesData, homePageContent } from "../../content/siteContent";
import Container from "../../components/Container";

// import Container from "../../components/Container";
const Home = ({ data }) => {
  console.log(data);
  // const [lat, setLat] = useState("");
  // const [lon, setLon] = useState("");

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //     setLat(position.coords.latitude);
  //     setLon(position.coords.longitude);
  //     console.log(lat);
  //     console.log(lon);
  //   });
  // });

  return (
    <div>
      <HeroBanner data={data} details={homePageContent.banner} />
      <Container>
        <MainComponent data={data} />
        <Services data={data} />
        <Steps />
        <Testimonials data={data} />
        <Faqs data={data} />
       
      </Container>
    </div>
  );
};

export default Home;
