import Link from "next/link";

export default function PDP({ productId }) {
  return (
    <div className="shop">
      <h1>Product {productId}</h1>
      <Link href="/shop">
        <a>Back</a>
      </Link>
      <style jsx>{`
        .shop {
          background: lightblue;
          width: 100%;
          color: #333;
        }
      `}</style>
    </div>
  );
}

PDP.getInitialProps = async (ctx) => {
  console.log(
    "get initial props on product page",
    ctx,
    ctx.query,
    ctx.query.path
  );
  return { productId: ctx.query.slug || ctx.query.path }; // todo this gets modified by the FederatedCatchAll.getInitialProps, check if we can preserve the same query name as the micro front-end (e.g. ctx.query.slug)
};
