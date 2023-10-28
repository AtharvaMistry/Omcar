import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Download from "./Download";
import Contact from "./Contact";
import Footer from "./Footer";
import Machines from "./Machines";

function Layout() {
  return (
    <>
      <div className="container-fluid">
        {/* header */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/machine" element={<Machines />} />

          {/* <Route path="header" element={<Header />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
