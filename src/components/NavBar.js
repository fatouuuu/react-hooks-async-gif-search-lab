import React from "react";
import GifSearch from "./GifSearch";

function NavBar({ color, title }) {
  const colors = {
    black: "navbar-inverse",
    white: "navbar-default",
  };

  return (
    <nav className={`navbar ${colors[color]}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">{title}</span>
        </div>
        <GifSearch />
      </div>
    </nav>
  );
}

export default NavBar;
