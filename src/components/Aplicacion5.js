import React from 'react'

const Aplicacion5 = () => {
    return (
            <section id='intro' className='main'>
                <div className='spotlight'>
                    <div className='content'>
                        <header className='major'>
                            <h2>Aplicación de Comercio Electrónico</h2>
                        </header>
                    <p>Objetivo: Manejo de rutas del lado del cliente, estados locales y globales,
                         rutas en un servidor, gestión y flujo de datos en MongoDB asi como seguridad (Autenticación y autorización).
                            Caracteristicas y puntos a considerar:
                            <br></br>
                        a. Un catálogo de productos
                        <br></br>
                        b. Un carrito de compras
                        <br></br>
                        c. Una pasarela de pago (puntualmente PayPal o MercadoPago, con la versión de pruebas)
                        <br></br>
                        d. Autenticación (registro de usuario e inicio de sesión, a través de JWT)
                        <br></br>
                        e. Autorización (zona privada donde el usuario pueda ver su perfil)
                        </p>
                        <ul className='actions'>
                            <li><a href='https://github.com/Stephaniepcs99/proyecto5-Frontend.git' className='button'>FRONTEND</a></li>
                            <li><a href='https://github.com/Stephaniepcs99/proyectp5-BackEnd.git' className='button'>BACKEND</a></li>
                        </ul>
                    </div> 
                    <span className='image'><img src='../images/app5.png' alt='' /></span>
                </div>
            </section> 
            
    )
}

export default Aplicacion5
