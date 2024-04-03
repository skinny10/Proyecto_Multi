import React from "react";
import shower from "../../../../../assets/Img/Shower.png";
import workspace from "../../../../../assets/Img/Workspace.png";
import wifi from "../../../../../assets/Img/Wifi.png";
import "../FormOverlay/FormOverlay.css";

function FormOverlay() {
  return (
    <>
      <form action="" className="content-amenidades">
        <h1>Amenidades</h1>
         <div className="amenidades-container">

            <div className="amenidad">
               <img src={shower} alt="shower" className="amenidad-icono" />
               <span className="amenidad-nombre">Baño</span>
               <div className="amenidad-checkbox">
               <input type="checkbox" id="shower" />
               <label htmlFor="shower"></label>
               </div>
            </div>

            <div className="amenidad">
               <img src={workspace} alt="workspace" className="amenidad-icono" />
               <span className="amenidad-nombre">Amueblado</span>
               <div className="amenidad-checkbox">
               <input type="checkbox" id="workspace" />
               <label htmlFor="workspace"></label>
               </div>
            </div>

            <div className="amenidad">
               <img src={wifi} alt="wifi" className="amenidad-icono" />
               <span className="amenidad-nombre">Wifi</span>
               <div className="amenidad-checkbox">
               <input type="checkbox" id="wifi" />
               <label htmlFor="wifi"></label>
               </div>
            </div>
            
        </div>
      </form>
    </>
  );
}

export default FormOverlay;