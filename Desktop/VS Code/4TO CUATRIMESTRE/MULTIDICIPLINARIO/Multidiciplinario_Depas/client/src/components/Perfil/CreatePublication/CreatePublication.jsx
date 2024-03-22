import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "../CreatePublication/CreatePublication.css";
import cro from "../../../assets/Img/cro.jpeg";
import images from "../../../assets/Img/IconoImages.png"


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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (previewImage) {
      // Aquí puedes manejar la lógica para guardar la imagen de la publicación
      Swal.fire("Éxito", "La publicación ha sido creada", "success");
      setIsEditing(false);
    }
  };

  return (
    <>
      <div className="publicacion">
        <div className="perfil-user">
          {/* Aquí puedes mostrar la imagen y el nombre del usuario */}
          <img src={cro} alt="Perfil" />
          <span>Skinny</span>
        </div>
       
        <textarea
        className="texto-placeholder"
          placeholder="¿Qué estás pensando?"
          onClick={handleEditClick} // Abre el editor al hacer clic en el textarea
        >
        </textarea>

       <div className="content-images">
       <button className="button-subir-images" onClick={handleEditClick}>
          <img className="icono-images" src={images} alt="Subir Imagen" />
          Subir Imagen
        </button>
       </div>

        {isEditing && (
          <div className="dropzone-overlay" onClick={() => setIsEditing(false)}>
            <div className="dropzone-content">
              <div
                className={`Drop-Photo ${previewImage ? "has-preview" : ""}`}
                style={{
                  backgroundImage: previewImage ? `url(${previewImage})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "200px", // Ancho del dropzone
                  height: "200px", // Alto del dropzone
                }}
                {...getRootProps()}
              >
                <input className="Photo-Perfil" {...getInputProps()} />
                {isDragActive ? (
                  <p>Arrastra la imagen...</p>
                ) : previewImage ? (
                  <p className="texto"></p>
                ) : (
                  <p className="texto">Agregar Imagen...</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CreatePublication;
