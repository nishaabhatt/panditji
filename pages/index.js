import React from "react";
import Home from "../src/screens/home/Home";
import { gql } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

const index = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <Home data={data} /> 
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery {
        homePages {
          banner {
            url
          }
          consultWithExpertContent
          panditJiProfile {
            name
            mobileNumber
            id
            image {
              url
            }
            expertise
            experienceYears
          }
          consultationPerks
          testimonial {
            name
            rating
            image {
              url
            }
            comment
          }
          faq {
            question
            answer
          }
        }
        servicePages {
          slug
          name
          description
          cities {
            name
          }
          image {
            url
          }
        }

        cities {
          name
          relation {
            ... on ServicePage {
              id
              name
            }
          }
        }

      }
    `,
  });

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
