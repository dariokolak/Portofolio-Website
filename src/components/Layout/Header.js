import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.logo}></div>
        <div className={classes.headliners}>
          <h1>DARIO KOLAK</h1>
          <h2>
            Frontend software developer based in
            <br /> Vienna, Austria
          </h2>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
