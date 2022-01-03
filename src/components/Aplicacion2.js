import React from 'react'

const Aplicacion2 = () => {
    return (
            <section id='intro' className='main'>
                <div className='spotlight'>
                    <div className='content'>
                        <header className='major'>
                            <h2>Aplicación CRUD</h2>
                        </header>
                        <p>Objetivo: Aplicar las operaciones CRUD en un segmento de datos.
                            Estructurar bajo un paradigma de programación (POO o PF).
                            Caracteristicas y puntos a considerar:
                            <br></br>
                            a. Una aplicación usando solo una página. Puedes utilizar el concepto de Single Page Application.
                            <br></br>
                            b. Una sección en tu aplicación para crear elementos (productos, tareas, usuarios, etc.)
                            <br></br>
                            c. Una sección para borrar elementos
                            <br></br>
                            d. Una sección para modificar elementos
                            <br></br>
                            e. Una sección para ver todos los elementos creados
                        </p>
                        <ul className='actions'>
                            <li><a href='https://stephaniepcs99.github.io/StephanieCortesProyecto2/' className='button'>Visítalo</a></li>
                            <li><a href='https://github.com/Stephaniepcs99/StephanieCortesProyecto2.git' className='button'>Repositorio</a></li>
                        </ul>
                    </div> 
                    <span className='image'><img src='../images/app2.png' alt='' /></span>
                </div>
            </section> 
            
    )
}

export default Aplicacion2
