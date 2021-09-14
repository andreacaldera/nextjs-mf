import React from "react";
import Head from "next/head";
import Link from "next/link";

const Checkout = () => (
  <div>
    <Head>
      <title>Another checkout page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Payment page</h1>
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
Checkout.getInitialProps = async () => {
  return {};
};
export default Checkout;
