import { useState } from "react";
import "./App.css";
import SideBar from "../components/SIdeBar";
import MainContents from "../components/MainContents";
function App() {
  return (
    <>
      <div className="AppMain">
        <SideBar />

        <MainContents />
      </div>
    </>
  );
}

export default App;
