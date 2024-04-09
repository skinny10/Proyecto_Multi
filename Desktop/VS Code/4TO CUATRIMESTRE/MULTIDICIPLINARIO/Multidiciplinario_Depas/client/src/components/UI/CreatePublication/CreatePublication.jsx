// CreatePublication.jsx
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import "./CreatePublication.css";
import cro from "../../../assets/Img/cro.jpeg";
import images from "../../../assets/Img/IconoImages.png";
import { Input } from "../Input";
import Overlay from "./Overlay/Overlay";

function CreatePublication() {
  const [previewImage, setPreviewImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      const file = acceptedFiles[0];
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled: !isEditing,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleExitEditing = () => {
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (previewImage) {
      // Aquí puedes manejar la lógica para guardar la imagen de la publicación
      Swal.fire("Éxito", "La publicación ha sido creada", "success");
      setIsEditing(false);
    }
  };

  const handleCloseOverlay = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="publicacion">

        <div className="perfil-user">
          {/* Aquí puedes mostrar la imagen y el nombre del usuario */}
          <img src={cro} alt="Perfil" />
          <span>Skinny</span>
        </div>

        {/* Input para la descripción */}
        <Input
          className="w-full bg-zinc-100 text-black px-4 py-2 rounded-md"
          placeholder="¿Qué estás pensando?"
          onClick={handleEditClick}
          readOnly={!isEditing}
        />

        <div className="content-images">
          <button className="button-subir-images" onClick={handleEditClick}>
            <img className="icono-images" src={images} alt="Subir Imagen" />
            Subir Imagen
          </button>
        </div>

        <Overlay
          isEditing={isEditing}
          handleEditClick={handleEditClick}
          handleCloseOverlay={handleCloseOverlay}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
          previewImage={previewImage}
        />
      </div>
    </>
  );
}

export default CreatePublication;
