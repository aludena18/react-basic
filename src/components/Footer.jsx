import React from "react";

export const Footer = function () {
  const date = new Date();

  return (
    <footer>
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  );
};
