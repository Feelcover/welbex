import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <Footer />
  </>
);

export default Layout;
