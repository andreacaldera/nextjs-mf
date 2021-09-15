import React from "react";
import Head from "next/head";
import Link from "next/link";

const MyBag = () => (
  <div>
    <Head>
      <title>My Bag</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>my bag page</h1>
      <h3 className="title">This is a federated page</h3>
      <br />
      <Link href="/checkout">
        <a>Back to checkout</a>
      </Link>
    </div>
    <style jsx>{`
      .hero {
        background: lightgreen;
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);
MyBag.getInitialProps = async () => {
  return {};
};
export default MyBag;
