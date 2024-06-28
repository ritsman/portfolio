import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
