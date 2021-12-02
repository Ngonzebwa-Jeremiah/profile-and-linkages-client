import Navbar from "./Nav/Navbar";
import Meta from "./Meta";
import Footer from "./Footer/Footer";
//import styles from "../styles/global_css/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Meta /> */}
      <Navbar />
      <div>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
