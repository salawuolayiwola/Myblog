import { Outlet } from "react-router-dom";
import Navbar from "../comps/navbar/navbar";
import Footer from "../comps/footer/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
