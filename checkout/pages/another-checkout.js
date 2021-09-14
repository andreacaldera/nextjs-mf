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
      <h1>Another checkout page</h1>
      <Link href="/checkout">
        <a>Back</a>
      </Link>
    </div>
  </div>
);
Checkout.getInitialProps = async () => {
  return {}
};
export default Checkout;
