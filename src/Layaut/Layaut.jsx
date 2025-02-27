import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../component/Header";

const Layout = () => {
  return (
    <div className="container mx-auto bg-gray-100 pb-10  bacs z-10">
      {/* Doimiy componentlar */}
     <div className="z-50">
     <Header />
     </div>
      {/* Sahifalar shu joyda yuklanadi */}
      <Outlet />
    </div>
  );
};

export default Layout;
