import React from "react";
import Header from "../UI/Header";
import OptionHeader from "../UI/OptionHeader";
import CreatePublication from "../UI/CreatePublication/CreatePublication";
import "../Home/HomeComponents.css";
import Amigos from "../UI/Amigos/Amigos";
import tatto1 from "../../assets/Img/tatto1.jpeg";
import elfi from "../../assets/Img/elfi.jpeg";
import tatto3 from "../../assets/Img/tatto3.jpeg";
import FraterDepartment from "../UI/Publications/FraterDepartment";
import shower from "../../assets/Img/Shower.png";
import wifi from "../../assets/Img/Wifi.png";
import workspace from "../../assets/Img/Workspace.png";
import frater from "../../assets/Img/frater.png";
import arcos from "../../assets/Img/arcos.jfif"

function HomeComponents() {
  return (
    <>
       <Header />
      <OptionHeader />
      <div className="container-publi">
  <div className="amigos-container">
    <CreatePublication />
    <div className="amigos-gap">
      <Amigos image={tatto1} name="Carlos Molina" correo="ramoscarlos@gmail.com" />
      <Amigos image={elfi} name="Andre Motontesinos" correo="andre0101@gmail.com" />
      <Amigos image={tatto3} name="Rafael Ramos" correo="ramosmolina@gmail.com" />
    </div>
  </div>
  <div className="publications-container">
    <div className="frater-department-wrapper">
    <FraterDepartment
  imageUrl={frater}
  title="Departamentos Frater"
  description="Descubre nuestros modernos departamentos con baño privado y todas las comodidades que necesitas para una estancia placentera."
/>
    </div> <br /> <br />
    <div className="frater-department-wrapper">
    <FraterDepartment
  imageUrl={arcos}
  title="Departamentos Arcos"
  description="Descubre nuestros modernos departamentos con baño privado y todas las comodidades que necesitas para una estancia placentera."
/>
    </div>
  </div>
</div>

    </>
  );
}

export default HomeComponents;