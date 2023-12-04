// import React from 'react'
// import { fetchDataFromApi } from "../../utils/api";
// import ServiceDetails from "../../src/screens/serviceDetails/ServiceDetails";

// const serviceDetails = ({service}) => {

//     // const p = service?.data?.[0]?.attributes;

//   return (
//     <div>
//         {/* {p.name}
//         {p.price}
//         {p.description} */}
//         <ServiceDetails services={service} />
//     </div>
    
//   )
// }

// export default serviceDetails;


// export async function getStaticPaths() {
//     const services = await fetchDataFromApi("/api/services?populate=*");
//     const paths = services?.data?.map((s) => ({
//         params: {
//             slug: s.attributes.slug,
//         },
//     }));

//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params: { slug } }) {
//     const service = await fetchDataFromApi(
//         `/api/services?populate=*&filters[slug][$eq]=${slug}`
//     );
//     // const products = await fetchDataFromApi(
//     //     `/api/products?populate=*&[filters][slug][$ne]=${slug}`
//     // );

//     return {
//         props: {
//            service,
            
//         },
//     };
// }




import { gql } from "@apollo/client";
import React from "react";
import apolloClient from "../../lib/apolloClient"
import ServiceDetails from "../../src/screens/serviceDetails/ServiceDetails"
function serviceDetails({ data }) {
//   console.log(data);

  return (
    <div>
      <ServiceDetails data={data} />
    </div>
  );
}

export async function getStaticPaths() {
    const { data } = await apolloClient.query({
      query: gql`
        query MyQuery {
          servicePages {
            slug
          }
        }
      `,
    });
  
    const paths = data.servicePages?.map((item) => ({
      params: {
        slug: item.slug, // Adjusted to use 'slug' instead of 'service'
      },
    }));
  
    return {
      paths,
      fallback: "blocking",
    };
  }
  
  export async function getStaticProps({ params: { slug } }) {
    console.log(slug); // Log the slug to ensure it is correct
  
    const { data } = await apolloClient.query({
      query: gql`
      query MyQuery($slug: String!) {
        servicePage(where: { slug: $slug }) {
          description
          name
          price
          slug
          tab2
          cities {
            id
            name
            image {
              url
            }
          }
          image {
            url
          }
          package {
            packagedes {
              text
            }
            samagriPrice
          }
        }
      }
      `,
      variables: {
        slug, // Pass the slug as a variable
      },
    });
  
    return {
      props: {
        data: data.servicePage,
      },
      revalidate: 10,
    };
  }
  
  export default serviceDetails;
  