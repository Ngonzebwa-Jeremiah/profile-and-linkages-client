import Head from "next/head";

const Meta = ({ title, keywords, description, siteLink, image }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />


      <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteLink} />
    <meta
      property="og:image"
      content={image}
    />
    <meta
      property="og:description"
      content={description}
    />

    <meta property="twitter:card" content={title}/>
    <meta
      property="twitter:url"
      content={siteLink}
    />
    <meta property="twitter:title" content={title} />
    <meta
      property="twitter:description"
      content={description}
    />
    <meta
      property="twitter:image"
      content={image}
    />


      <script defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossOrigin="anonymous"
      ></script>

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Support",
  keywords: "e-commerce",
  description: "Mini food e-shop that displays food stock to order",
  image:"https://i.pinimg.com/564x/53/13/34/531334345574129dcc9e53d39d3ce0fc.jpg",
  siteLink:"https://foodiiy.netlify.app/"
};

export default Meta;
