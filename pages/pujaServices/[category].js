import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import apolloClient from "../../lib/apolloClient";
import PujaServices from "../../src/screens/puja services/PujaServices";

const PujaServicesByCategory = ({ data }) => {
  return (
    <div>
      <PujaServices data={data} />
    </div>
  );
};

export default PujaServicesByCategory;

export const getStaticProps = async ({ params }) => {
  const { category } = params;

  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery($category: String!) {
        categories(where: { name: $category }) {
          id
          name
          image {
            url
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
        }
      }
    `,
    variables: { category },
  });

  return {
    props: {
      data: data.categories[0],
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  // Fetch the list of categories here
  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery {
        categories {
          name
        }
      }
    `,
  });

  // Create paths for each category
  const paths = data.categories.map((category) => ({
    params: { category: encodeURIComponent(category.name) },
  }));

  return {
    paths,
    fallback: false,
  };
};
