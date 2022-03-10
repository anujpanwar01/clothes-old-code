import React from "react";
import "./Custom-btn.scss";

const CustomBtn = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomBtn;
