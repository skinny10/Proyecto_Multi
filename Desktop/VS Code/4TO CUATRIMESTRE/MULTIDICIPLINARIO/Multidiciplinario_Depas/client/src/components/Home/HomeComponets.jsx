import React from "react";
import Header from "../UI/Header";
import OptionHeader from "../UI/OptionHeader";
import CreatePublication from "../UI/CreatePublication/CreatePublication";
import "../Home/HomeComponents.css";
import Amigos from "../UI/Amigos/Amigos";
import tatto1 from "../../assets/Img/tatto1.jpeg"
import elfi from "../../assets/Img/elfi.jpeg"
import tatto3 from "../../assets/Img/tatto3.jpeg"

function HomeComponents() {
  return (
    <>
      <Header />
      <OptionHeader />
      <div className="container-publi ">
        <CreatePublication />
        
        <div className="amigos-gap">
        <Amigos image={tatto1} name="Carlos Molina" correo="ramoscarlos@gmail.com" />
        <Amigos image={elfi} name="Andre Motontesinos" correo="andre0101@gmail.com" />
        <Amigos image={tatto3} name="Rafael Ramos" correo="ramosmolina@gmail.com" />
        </div>
        
      </div>
    </>
  );
}

export default HomeComponents;
