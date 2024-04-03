import React from "react";
import { Input } from "../../Input";
import FormOverlay from "./FormOverlay/FormOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Overlay = ({
  isEditing,
  handleEditClick,
  handleCloseOverlay, // Agrega esta prop
  getRootProps,
  getInputProps,
  isDragActive,
  previewImage,
}) => (
  isEditing && (
    <div className="dropzone-overlay">
      <div className="dropzone-content relative"> {/* Agrega la clase 'relative' */}
        {/* Botón de salir */}
        <button
          className="absolute top-2 right-2 text-black hover:text-red-500" // Estilos para el botón de salir
          onClick={handleCloseOverlay} // Manejador de eventos para cerrar el overlay
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Input
          className="mt-3 w-full bg-zinc-200 text-black px-4 py-2 rounded-md"
          placeholder="¿Qué estás pensando?"
          onClick={handleEditClick}
          readOnly={!isEditing}
        />
        <div className="content-drop hover:bg-sky-900" {...getRootProps()}>
          <input className="Photo-Perfil" {...getInputProps()} />
          {isDragActive ? (
            <p>Arrastra la imagen...</p>
          ) : previewImage ? (
            <p className="texto"></p>
          ) : (
            <p className="texto">Agregar Imagen...</p>
          )}
        </div>
        <FormOverlay />
        <div className="flex justify-end">
          <button className=" bg-sky-800 px-6 py-1 rounded-md my-10 disabled:bg-indigo-300 hover:bg-sky-900">
            Publicar
          </button>
        </div>
      </div>
    </div>
  )
);

export default Overlay;