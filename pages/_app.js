import "../styles/global.css";
import "swiper/css";
import "swiper/css/navigation";
import dynamic from "next/dynamic";
import "react-h5-audio-player/lib/styles.css";
import { Suspense } from "react";

function MyApp({ Component, pageProps }) {
  const DynamicLayout = dynamic(() => import("../src/components/Layout"));

  return (
    <>
      <Suspense fallback={`Loading...`}>
        <DynamicLayout>
          <Component {...pageProps} />
        </DynamicLayout>
      </Suspense>
    </>
  );
}

export default MyApp;

// pages/_app.js
