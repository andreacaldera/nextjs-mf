import React, { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const RemoteTitle = dynamic(
  () => {
    return window.checkout?.get("./title").then((factory) => factory());
    // const mod = import("checkout/title");
    // return mod
  },
  { ssr: false }
);

const Home = ({ loaded }) => {
  console.log("home");
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <RemoteTitle title="Title from home" />
        <h1 className="title">Welcome to your favorite online shop</h1>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  return {};
};

export default Home;
