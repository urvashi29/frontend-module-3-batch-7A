import Head from "next/head";
import Image from "next/image";
import img from "@/public/unsplash.jpg";
import { Roboto } from "next/font/google";
import { montserrat } from "./utils/font";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const url =
    "https://plus.unsplash.com/premium_photo-1691979319026-b6470c0c2198?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <Head>
        {/* CDN  for google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <title>Create Next App</title>
      </Head>

      <h2>Optimization</h2>
      {/* <img src="./unsplash.jpg" alt="fire" height={200} width={200} /> */}
      {/* to Optimize images */}
      {/* <Image src={url} width={200} height={200} layout="responsive" /> */}

      {/* beacuse of security reason, we need to include domain in next.config.js */}

      {/* Priority of images */}
      <Image src={url} width={200} height={200} />
      <Image src={img} width={200} height={200} priority />

      {/* Font */}
      <p style={{ fontFamily: "Open Sans" }}>Almabetter</p>
      <p className={roboto.className}>Almabetter</p>
      <p
        className={montserrat.className}
        style={{ fontFamliy: `${montserrat.variable}` }}
      >
        Hello
      </p>
    </>
  );
}
