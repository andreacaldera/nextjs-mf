import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Basket } from "../components/basket";

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
        <a
          target="checkout-app"
          href={`${process.env.NEXT_PUBLIC_CHECKOUT_BASE_URL}/checkout`}
        >
          Checkout app
        </a>
      </h3>
      <Basket />
      <br />
      <Link href="/payment">
        <a>Proceed to payment</a>
      </Link>
      <br />
      <Link href="/mybag">
        <a>My bag</a>
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
  const data = [
    { sku: "1111", price: 9.0, name: "Pizza" },
    { sku: "2222", price: 30.0, name: "Whiskey" },
  ];
  return data;
};
export default Checkout;
