import React from "react";

import "./index.less";

type Iprops = {
  size?: "small" | "normal" | undefined;
};

function Logo(props: Iprops) {
  return (
    <div
      className="logo"
      style={{
        width: props.size === "small" ? "1rem" : "2rem",
        height: props.size === "small" ? "1rem" : "2rem",
      }}
    ></div>
  );
}

export default Logo;
