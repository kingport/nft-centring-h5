import React from "react";
import "./App.less";
import RouterView from "./router";
import config from "@/config";

console.info(config, "config");

function App() {
  return <RouterView></RouterView>;
}

export default App;
