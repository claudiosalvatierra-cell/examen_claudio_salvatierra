import React from 'react';

function Producto({ producto, onAgregarAlCarrito }) {
    return (
        <div className="card h-100 p-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text text-muted">Precio: ${producto.precio}</p>
              <button className="btn btn-primary w-100" onClick={() => onAgregarAlCarrito(producto)}>
                Agregar al Carrito
              </button>
            </div>
          </div>
        );
}

export default Producto;