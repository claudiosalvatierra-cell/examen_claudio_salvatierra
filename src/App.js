import React from 'react';
import ListaProductos from './components/ListaProductos';
import FormularioProducto from './components/FormularioProducto';
import AuthStorage from './components/AuthStorage';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Examen Final: Programación de Componentes
      </h1>
      
      <hr />

      {/* Componente de Autenticación y Subida de Archivos */}
      <AuthStorage />

      <hr className="my-5" />

      {/* Componente para agregar productos */}
      <FormularioProducto />

      <hr className="my-5" />

      {/* Componente para listar los productos */}
      <ListaProductos />
      
    </div>
  );
}

export default App;
