import React, { useState } from "react";
import Bar from "./Bar";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Mobile = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`mobile-searchbar-container-${open ? "opened" : "closed"}`}>
      <div className="mobile-searchbar-nav-container">
        <span className="mobile-searchbar-nav-item">Filtros y búsqueda</span>
        {open ? (
          <MdClose
            onClick={openMenu}
            className="mobile-searchbar-nav-item mobile-searchbar-nav-button"
          />
        ) : (
          <HiMenu
            onClick={openMenu}
            className="mobile-searchbar-nav-item mobile-searchbar-nav-button"
          />
        )}
      </div>
      {open && (
        <div className="mobile-searchbar-bar-container">
          <Bar className="mobile-bar" />
        </div>
      )}
    </div>
  );
};

export default Mobile;
