// import React from "react";
// import Herobanner from "../../components/Herobanner";
// import Card from "./components/Card";
// import { Container } from "@mui/material";

// const PujaServices = ({ services }) => {
//   // console.log(data.poojaServicesPages[0].bannerImage.url);
//   return (
//     <div>
//       {/* <Herobanner
//         title="Pooja Services"
//         imgUri={data?.poojaServicesPages[0]?.bannerImage?.url}
//       /> */}
//       <Container>
//         {/* <div className="flex justify-evenly flex-wrap items-center py-10 px-10"> */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
//       {services?.data?.map((service) => (
//        <Card data={service} key={service?.id} />
//     ))}
//     </div>
        
//       </Container>
//     </div>
//   );
// };

// export default PujaServices;


import React from "react";
import Herobanner from "../../components/Herobanner";
import Card from "./components/Card";
import { Container } from "@mui/material";
import { servicesData } from "../../content/siteContent";
import apolloClient from "../../../lib/apolloClient";
import { gql } from "@apollo/client";

const PujaServices = ({ data }) => {
  // console.log(data.poojaServicesPages[0].bannerImage.url);

  return (
    <div>
      {/* <Herobanner
        title="Pooja Services"
        imgUri={data?.poojaServicesPages[0]?.bannerImage?.url}
      /> */}
      <Container>
        <Card data={data} />
      </Container>
    </div>
  );
};

export default PujaServices;

