import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import iconedit from '../../../assets/Img/iconedit.png';
import "../PhotoPerfil/PhotoPerfil.css";

function PhotoPerfil() {
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
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas cambiar tu foto de perfil?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, cambiar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          // Simular el éxito del envío de la imagen
          Swal.fire("Éxito", "Tu foto de perfil ha sido actualizada", "success");
          setIsEditing(false);
        }
      });
    }
  };

  return (
    <>
      <div className="content-main">
        <div className="photo-container">
          <div
            className={`Drop-Photo ${previewImage ? "has-preview" : ""}`}
            style={{
              backgroundImage: previewImage ? `url(${previewImage})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            {...getRootProps()}
          >
            <input className="Photo-Perfil" {...getInputProps()} />
            {isDragActive ? (
              <p>Arrastra la imagen...</p>
            ) : !isEditing && previewImage ? (
              <p className="texto"></p>
            ) : (
              <p className="texto">Agregar Imagen...</p>
            )}
          </div>
          {!isEditing && (
            <button className="edit-button" onClick={handleEditClick}>
              <img className="image-icone" src={iconedit} alt="Editar" />
            </button>
          )}
        </div>
        {isEditing && (
          <form onSubmit={handleSubmit}>
            <button className="enviar" type="submit">
              Guardar
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default PhotoPerfil;
