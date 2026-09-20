
import React, { Component } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [
        { id: 1, nombre: 'Teclado Mecánico RGB', precio: 45000 },
        { id: 2, nombre: 'Mouse Inalámbrico Gamer', precio: 28000 },
        { id: 3, nombre: 'Monitor 24" FHD', precio: 115000 }
      ],
      carrito: []
    };
  }

  handleAgregarAlCarrito = (productoSeleccionado) => {
    this.setState((prevState) => ({
      carrito: [...prevState.carrito, productoSeleccionado]
    }));
  }

  render() {
    return (
      <div>
        <h2>Ejercicio 1: Lista de Productos y Carrito</h2>
        <div>
          {this.state.productos.map((prod) => (
            <Producto
              key={prod.id}
              producto={prod}
              onAgregarAlCarrito={this.handleAgregarAlCarrito}
            />
          ))}
        </div>
        <hr />
        <h4>Carrito de Compras ({this.state.carrito.length} ítems)</h4>
        {this.state.carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {this.state.carrito.map((item, index) => (
              <li key={index}>
                {item.nombre} <span>${item.precio}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ListaProductos;