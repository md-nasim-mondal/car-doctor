import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <div className=" min-h-[calc(100vh-332px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
