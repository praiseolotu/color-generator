import React, { useState, useEffect } from "react";
import { FaClipboardCheck } from "react-icons/fa";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor, howMany }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [alert]);

  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  return (
    <>
      <article
        style={{ backgroundColor: `rgb(${bcg})` }}
        className={`color ${index > 100 / howMany && "color-light"}`}
        onClick={() => {
          setAlert(true);
          window.navigator.clipboard.writeText(hexValue);
        }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && (
          <p className="alert">
            copied to clipboard <FaClipboardCheck className="icons" />
          </p>
        )}
      </article>
    </>
  );
};

export default SingleColor;
