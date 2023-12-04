import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";
import { ApolloClient, gql } from "@apollo/client";
import apolloClient from "../../lib/apolloClient";

const Layout = ({ children }) => {
  const router = useRouter();
  const [data, setData] = useState([]);

  const [none, setNone] = useState("contents");

  console.log(router.pathname);

  useEffect(() => {
    if (
      router.pathname === "/panels/admin" ||
      router.pathname === "/panels/superadmin" ||
      router.pathname === "/panels/panditji"
    ) {
      setNone("none");
    } else {
      setNone("contents");
    }
  }, [router, setNone]);

    useEffect(() => {
    apolloClient
      .query({
        query: gql`
        query MyQuery {
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
      })
      .then((res) => setData(res.data.cities));
  });

  return (
    <div>
      <NavBar display={`${none}`} data={data} router={router}/>
      <main>{children}</main>
      <Footer display={`${none}`} />
    </div>
  );
};

export default Layout;
