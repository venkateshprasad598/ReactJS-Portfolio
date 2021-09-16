import React from "react";
import { FaBars } from "react-icons/fa";
import "./Home.css";
import { useStateProvider } from "../context/Context";
const Home = () => {
  const data = useStateProvider();
  console.log(data.click);

  return (
    <main>
      <button className="sidebar__toggle" onClick={data.click}>
        <FaBars />
      </button>
    </main>
  );
};

export default Home;
