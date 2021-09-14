import React from "react";
import Head from "next/head";
import Link from "next/link";

const Shop = (props) => (
  <div>
    <Head>
      <title>Shop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Shop Page</h1>
      <h3 className="title">
        This is a federated page owned by{" "}
        <a target="localhost:3002" href="http://localhost:3002/shop">
          Shop app
        </a>
      </h3>
      <ul>
        <li>
          <Link href="p/1">
            <a>Product One</a>
          </Link>
        </li>
        <li>
          <Link href="p/2">
            <a>Product Two</a>
          </Link>
        </li>
      </ul>
      <span>
        {" "}
        Data from federated <pre>getInitalProps</pre>
      </span>
      <br />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
    <style jsx>{`
      .hero {
        background: lightblue;
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
Shop.getInitialProps = async () => {
  console.log("get shop initial props");
  const swapi = await fetch("https://swapi.dev/api/people/1").then((res) =>
    res.json()
  );
  return swapi;
};
export default Shop;
