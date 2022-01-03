import React from 'react'

const Aplicacion1 = () => {
    return (
            <section id='intro' className='main'>
                <div className='spotlight'>
                    <div className='content'>
                        <header className='major'>
                            <h2>Landing de Negocio</h2>
                        </header>
                        <p>Objetivo: El objetivo principal de este proyecto es desarrollar una interfaz 
                            utilizando HTML y CSS, en toda su aplicación.
                            Caracteristicas y puntos a considerar:
                            <br></br>
                            a. Header Sección que involucra el logo y las áreas principales del sitio.
                            <br></br>
                            b. Jumbotron Sección de presentación del producto al usuario. Debe de incluir su título, descripción y un elemento para introducir tu correo.
                            <br></br>
                            c. Blog o catálogo Sección para mostrar los artículos del sitio web. O en su caso, artículos de catálogo de productos
                            <br></br>
                            d. Adicionales Secciones diversas que puedes agregar para dar mayor valor a tu sitio.
                            <br></br>
                            e. Footer Sección que incluye todas las áreas del sitio, incluyendo redes sociales.

                        </p>
                        <ul className='actions'>
                            <li><a href='https://stephaniepcs99.github.io/StephanieCortesS-Proyecto1/' className='button'>Visítalo</a></li>
                            <li><a href='https://github.com/Stephaniepcs99/StephanieCortesS-Proyecto1.git' className='button'>Repositorio</a></li>
                        </ul>
                    </div> 
                    <span className='image'><img src='../images/app1.png' alt='' /></span>
                </div>
            </section> 
            
    )
}

export default Aplicacion1
