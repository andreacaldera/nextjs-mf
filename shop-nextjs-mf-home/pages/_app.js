import Nav from "../components/nav";
function MyApp({ Component, pageProps }) {
  console.log("home app1");
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
