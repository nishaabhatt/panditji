import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiOutlineDown } from "react-icons/ai";

export default function SimpleAccordion({ data }) {
  // console.log(data.homePages[0].faq);
  return (
    <div className="px-2 md:px-5 lg:px-10 my-10">
      {/* <h2>
        {" "}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold  text-center my-2">
          Frequently asked{" "}
          <span className="text-primaryLight underline underline-offset-4 decoration-secondary">
            Questions
          </span>
        </h2>
      </h2> */}

       <h2>
        {" "} </h2>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold  text-center my-2">
          Frequently asked{" "}
          <span className="text-primaryLight underline underline-offset-4 decoration-secondary">
            Questions
          </span>
        </h2>
      

      {data.homePages[0].faq.map((item, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<AiOutlineDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
