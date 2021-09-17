import React from "react";
import { FaBars } from "react-icons/fa";
import "./Home.css";
import { useStateProvider } from "../context/Context";
import { useState } from "react";
import { lightTheme, darkTheme } from "./Theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Theme";
import { StyledApp } from "./Theme";

const Home = () => {
  const data = useStateProvider();
  const [theme, setTheme] = useState("light");

  const themeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <main>
      <button className="sidebar__toggle" onClick={data.click}>
        <FaBars />
      </button>
      {/* <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <button style={{ marginLeft: "100px" }} onClick={themeChange}>
          Theme Change
        </button>
        <GlobalStyles />
        <StyledApp>Hello</StyledApp>
      </ThemeProvider> */}
    </main>
  );
};

export default Home;
