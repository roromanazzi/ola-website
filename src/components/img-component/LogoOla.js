import logoOlaSrc from "../../img/logoOla.png";

import React from "react";

export const LogoOla = () => {
  return (
    <img
      src={logoOlaSrc}
      alt="logo Ola"
      style={{
        maxWidth: "100px",
        maxHeight: "auto",
        filter: "invert(1) opacity(0.5)",
        margin: "16px 20px",
      }}
    ></img>
  );
};
