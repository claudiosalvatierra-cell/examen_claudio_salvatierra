import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { db } from '../firebase';

class FormularioProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      precio: ''
    };
    
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      messages: {
        required: 'Este campo es obligatorio.',
        alpha_space: 'Solo se permiten letras y espacios.',
        numeric: 'Debe ingresar un valor numérico.'
      }
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      db.collection('productos')
        .add({
          nombre: this.state.nombre,
          precio: parseFloat(this.state.precio),
          fechaCreacion: new Date()
        })
        .then(() => {
          alert('Producto registrado exitosamente en Firestore Database');
          this.setState({ nombre: '', precio: '' });
          this.validator.hideMessages();
        })
        .catch((error) => {
          console.error('Error al guardar en Firestore:', error);
        });
    } else {
      this.validator.showMessages();
    }
  };

  render() {
    return (
      <div>
        <h2>Ejercicio 2: Formulario con Validación y Firestore</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input 
              type="text" 
              name="nombre" 
              value={this.state.nombre} 
              onChange={this.handleChange} 
            />
            {this.validator.message('nombre', this.state.nombre, 'required|alpha_space')}
          </div>
          
          <div>
            <label>Precio:</label>
            <input 
              type="text" 
              name="precio" 
              value={this.state.precio} 
              onChange={this.handleChange} 
            />
            {this.validator.message('precio', this.state.precio, 'required|numeric')}
          </div>

          <button type="submit">Guardar Producto</button>
        </form>
      </div>
    );
  }
}

export default FormularioProducto;