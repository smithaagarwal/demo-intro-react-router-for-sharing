import "../../App.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <Header />
    <main className="p-6" style={{ flex: "1" }}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
