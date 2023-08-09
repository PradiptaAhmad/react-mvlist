import React from "react";
import { Card, Container } from "react-bootstrap";
import ContainerData from "./containerData";

const onclick = () => {
  return(
    <ContainerData/>
  )
}
const Intro = () => {
  return (
    <div className="">
      <div className="intro">CARI FILM YANG SERU?</div>

      <div className="button">
        <button onClick={() => history.pushState("ContainerData")}>Lihat Semua List</button>
      </div>
    </div>
  );
};

export default Intro;
