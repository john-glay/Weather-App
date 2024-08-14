import React from "react";
import Search from "./Search";
import Theme from "./Theme";
import Settings from "./Settings";
import CurrentLocation from "./CurrentLocation";
import "../styles/components/Header.scss";

function Header() {
  return (
    <div className="Header">
      <Search />
      <div className="header-icons">
        <CurrentLocation />
        <Theme />
        <Settings />
      </div>
    </div>
  );
}

export default Header;
