import React, { useState } from 'react';
import { auth, storage } from '../firebase';

function AuthStorage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [progreso, setProgreso] = useState(0);
  const [urlDescarga, setUrlDescarga] = useState('');

  // Autenticación de Usuario
  const handleRegistro = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert(`Usuario registrado con éxito: ${userCredential.user.email}`);
        setEmail('');
        setPassword('');
      })
      .catch((error) => alert(`Error de Auth: ${error.message}`));
  };

  // Subida de Archivos a Firebase Storage
  const handleUpload = (e) => {
    e.preventDefault();
    if (!archivo) return alert('Seleccione un archivo primero.');

    const uploadTask = storage.ref(`archivos/${archivo.name}`).put(archivo);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const porcentaje = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgreso(porcentaje);
      },
      (error) => console.error(error),
      () => {
        storage
          .ref('archivos')
          .child(archivo.name)
          .getDownloadURL()
          .then((url) => {
            setUrlDescarga(url);
            alert('Archivo subido exitosamente a Firebase Storage');
          });
      }
    );
  };

  return (
    <div className="container mt-5">
      <h2>Ejercicio 3: Bootstrap, Firebase Auth y Storage</h2>

      <hr />

      {/* Registro en Auth */}
      <div className="mb-4">
        <h3>Registro de Usuario (Auth)</h3>
        <form onSubmit={handleRegistro}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
      </div>

      <hr />

      {/* Subida de Archivo en Storage */}
      <div className="mb-4">
        <h3>Subida de Archivos (Storage)</h3>
        <form onSubmit={handleUpload}>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={(e) => setArchivo(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn btn-success mb-3">
            Subir Archivo
          </button>
        </form>

        {/* Barra de Progreso */}
        {progreso > 0 && (
          <div className="progress mb-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progreso}%` }}
              aria-valuenow={progreso}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progreso}%
            </div>
          </div>
        )}

        {/* Enlace de Descarga */}
        {urlDescarga && (
          <div className="alert alert-info">
            <a href={urlDescarga} target="_blank" rel="noopener noreferrer">
              Ver archivo subido
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthStorage;