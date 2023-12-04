import { gql } from "@apollo/client";
import Link from "next/link";
import React from "react";
import apolloClient from "../lib/apolloClient";
import OurServices from "../src/screens/ourServices/OurServices";

const Category = ({ data }) => {
  return (
    <div>
      <OurServices data={data} />
      
    </div>
  );
};

export default Category;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery {
        categories {
          id
          name
          image {
            url
          }
          servicePages {
            name
            image {
              url
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
