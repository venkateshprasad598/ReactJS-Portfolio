import React from "react";
import Links from "./Links/Links";
import "./Nav.css";
import { useStateProvider } from "../context/Context";

const Nav = () => {
  const data = useStateProvider();
  console.log(data.slide);
  return (
    <aside>
      <div className={data.slide ? "slider__show" : "slider__hide"}>
        <div>
          <h1>Portfolio</h1>
          <button onClick={data.click}>Remove</button>
        </div>
        <div>
          <ul>
            {Links.map((data) => {
              const { id, url, text, icon } = data;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Nav;
