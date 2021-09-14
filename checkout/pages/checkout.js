import React from "react";
import Head from "next/head";
import Link from "next/link";

const Checkout = (props) => (
  <div>
    <Head>
      <title>checkout</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Checkout page</h1>
      <h3 className="title">
        This is a federated page owned by{" "}
        <a target="localhost:3000" href="http://localhost:3000/checkout">
          Checkout app
        </a>
      </h3>
      <Link href="/payment">
        <a>Proceed to payment</a>
      </Link>
      <br />
      <span>
        {" "}
        Data from federated <pre>getInitalProps</pre>
      </span>
      <br />
      <pre>{JSON.stringify(props, null, 2)}</pre>
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
  const swapi = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((res) => res.json());
  return swapi;
};
export default Checkout;
