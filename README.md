```
# Examen Final - Programación de Componentes 🚀

Aplicación web desarrollada en **React** e integrada con **Firebase**, desplegada en **Netlify** y empaquetada como ejecutable móvil **APK para Android** mediante **Cordova** y **Android Studio**.

---

## 📋 Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración Local](#instalación-y-configuración-local)
- [Descripción de los Ejercicios](#descripción-de-los-ejercicios)
  - [Ejercicio 1: Componentes, Props y Estado](#ejercicio-1-componentes-props-y-estado)
  - [Ejercicio 2: Formulario, Validación y Firestore](#ejercicio-2-formulario-validación-y-firestore)
  - [Ejercicio 3: Bootstrap, Firebase Auth y Storage](#ejercicio-3-bootstrap-firebase-auth-y-storage)
- [Despliegue Web en Netlify](#despliegue-web-en-netlify)
- [Empaquetado y Firma Digital del APK (Android)](#empaquetado-y-firma-digital-del-apk-android)
- [Autor e Información Académica](#autor-e-información-académica)

---

## 💻 Descripción del Proyecto
Este proyecto corresponde al Examen Práctico de la asignatura **Programación de Componentes**. Demuestra el flujo completo de desarrollo de software moderno:
1. Diseño modular de la interfaz utilizando componentes de React y estilos de **Bootstrap**.
2. Manejo del flujo unidireccional de datos, estados (`state`) y propiedades (`props`).
3. Validación de entradas en formularios cliente con `react-simple-validator`.
4. Integración de servicios Cloud con **Firebase** (Firestore Database, Authentication y Storage).
5. Despliegue de producción continuo mediante **Netlify**.
6. Transformación de la aplicación web a una App Nativa Android (APK) con firma digital (`keytool`, `jarsigner`) y optimización de recursos (`zipalign`).

---

## 🛠️ Tecnologías Utilizadas
* **Frontend:** React.js, JSX, Bootstrap 5.
* **Validación de Datos:** `react-simple-validator`.
* **Backend y Cloud Services (Firebase):**
  * **Cloud Firestore:** Base de datos NoSQL en tiempo real.
  * **Firebase Authentication:** Gestión y registro de usuarios.
  * **Firebase Storage:** Almacenamiento de archivos multimedia.
* **Herramientas de Móvil y Empaquetado:** Apache Cordova, Android Studio, Java JDK.
* **Seguridad y Optimización APK:** Keytool, Jarsigner, Zipalign.
* **Despliegue y Control de Versiones:** Git, GitHub, Netlify.

---

## 📂 Estructura del Proyecto

```text
examen-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Producto.jsx           # Ejercicio 1: Componente Hijo
│   │   ├── ListaProductos.jsx     # Ejercicio 1: Componente Padre con Carrito
│   │   ├── FormularioProducto.jsx # Ejercicio 2: Formulario con Validación y Firestore
│   │   └── AuthStorage.jsx        # Ejercicio 3: Autenticación y Subida a Storage
│   ├── firebase.js                # Configuración e Inicialización del SDK de Firebase
│   ├── App.js                     # Componente Principal
│   └── index.js                   # Punto de entrada e importación de Bootstrap CSS
├── package.json
└── README.md                      # Documentación del proyecto

```

---

## ⚙️ Instalación y Configuración Local

1. **Clonar el repositorio:**

```
git clone https://github.com/TU_USUARIO/examen-react.git
cd examen-react

```

1. **Instalar dependencias:**

```
npm install

```

1. **Configurar variables de Firebase:** Crea o edita el archivo `src/firebase.js` agregando tus credenciales obtenidas desde la **Firebase Console**:

```
const firebaseConfig = {
  apiKey: "AIzaSyAn-vp5puoGDCeM0k4mKMD0fBM4UMa0D7M",
  authDomain: "examen-csalvatierra.firebaseapp.com",
  projectId: "examen-csalvatierra",
  storageBucket: "examen-csalvatierra.firebasestorage.app",
  messagingSenderId: "818336614215",
  appId: "1:818336614215:web:0d7e4b573d279cce8eae62",
  measurementId: "G-07BN2ZYERX"
};

```

1. **Ejecutar la aplicación en modo desarrollo:**

```
npm start

```

Abre [http://localhost:3000](https://www.google.com/url?sa=E&amp;q=http%3A%2F%2Flocalhost%3A3000) en el navegador.

---

## 📝 Descripción de los Ejercicios

### Ejercicio 1: Componentes, Props y Estado

* **Producto.jsx** **(Hijo):** Muestra el nombre y precio del producto. Notifica al componente padre mediante una función callback (`onAgregarAlCarrito`) al presionar el botón.
* **ListaProductos.jsx** **(Padre):** Administra el listado de productos disponibles y el estado del carrito de compras (`this.state.carrito`). Implementa el método `.map()` con `keys` únicas para renderizar los elementos de forma eficiente.

### Ejercicio 2: Formulario, Validación y Firestore

* **FormularioProducto.jsx** **:** Captura la información de nuevos productos (nombre y precio).
* **Validación:** Utiliza `react-simple-validator` para asegurar que el nombre no contenga caracteres especiales y el precio sea estrictamente numérico.
* **Persistencia:** Al validar correctamente, guarda el registro en la colección `'productos'` de **Cloud Firestore**.

### Ejercicio 3: Bootstrap, Firebase Auth y Storage

* **Diseño Responsivo:** Implementación del sistema de cuadrícula de Bootstrap (`container`, `row`, `col-12`, `col-md-6`).
* **Firebase Auth:** Permite el registro de usuarios en la nube utilizando `createUserWithEmailAndPassword`.
* **Firebase Storage:** Facilita la subida de archivos multimedia visualizando el porcentaje de progreso de subida (`state_changed`) y entregando un enlace público de descarga (`getDownloadURL`).

---

## 🌐 Despliegue Web en Netlify

El proyecto ha sido desplegado de forma continua en **Netlify**:

* 🔗 **Enlace a la Aplicación Web:** `https://tu-proyecto-examen.netlify.app`
* 🔗 **Repositorio en GitHub:** `https://github.com/claudiosalvatierra-cell/examen_claudio_salvatierra`

Para generar la versión optimizada de producción utilizada por Netlify:

```
npm run build

```

---

## 📱 Empaquetado y Firma Digital del APK (Android)

Para llevar la aplicación web al entorno nativo de Android:

1. **Creación del proyecto en Cordova:**

```
cordova create apk-app com.examen.react ExamenApp
cd apk-app
cordova platform add android

```

1. **Generación de Clave y Certificado Privado (** **keytool** **):**

```
keytool -genkey -v -keystore mi-clave.keystore -alias mi-alias -keyalg RSA -keysize 2048 -validity 10000

```

1. **Firma Digital del Paquete APK (** **jarsigner** **):**

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore mi-clave.keystore app-release-unsigned.apk mi-alias

```

1. **Alineación y Optimización de Recursos (** **zipalign** **):**

```
zipalign -v 4 app-release-unsigned.apk ExamenFinal.apk

```

1. **Prueba en Dispositivo Físico:** Habilitación de **Depuración por USB** en **Ajustes &gt; Opciones de desarrollador** del dispositivo Android.

---

## 👤 Autor e Información Académica

* **Asignatura:** Programación de Componentes
* **Carrera:** Área de Informática y Telecomunicaciones
* **Institución:** IPLACEX
* **Estudiante:** Claudio Salvatierra
* **Fecha:** Septiembre 2026