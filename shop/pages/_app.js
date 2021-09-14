import dynamic from "next/dynamic";
const Nav = dynamic(
  () => {
    const mod = import("home/nav");
    console.log(mod);
    return mod;
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div style={{ background: 'lightblue' }}>
      <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
