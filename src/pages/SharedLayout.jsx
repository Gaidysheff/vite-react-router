import { NavLink } from "react-router";
import { Outlet } from "react-router";
import React from "react";
import perfume from "../assets/Baccarat-Photoroom.png";
import reactLogo from "/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

const SharedLayout = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-row justify-center text-3xl">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={perfume} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <br />
      <NavLink to="/vite-react-router">Home</NavLink> |{" "}
      <NavLink to="/vite-react-router/about">LST</NavLink> |{" "}
      <NavLink to="/vite-react-router/filter">Filter</NavLink>
      <Outlet />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default SharedLayout;
