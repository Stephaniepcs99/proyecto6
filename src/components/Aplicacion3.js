import React from 'react'

const Aplicacion3 = () => {
    return (
            <section id='intro' className='main'>
                <div className='spotlight'>
                    <div className='content'>
                        <header className='major'>
                            <h2>Tablero de Datos ("Dashboard")</h2>
                        </header>
                        <p>Objetivo: Crear un ambiente de desarrollo con Node.js, 
                            conocer el funcionamiento de las APIs y
                            aplicar procesos síncronos y asíncronos en JavaScript
                            Caracteristicas y puntos a considerar:
                            <br></br>
                            a. Usar un ambiente de desarrollo con Node.js
                            <br></br>
                            b. Utilizar Chart.js para el desarrollo de gráficas. En caso de quere utilizar una diferente, es posible.
                            <br></br>
                            c. Realizar una conexión a una API externa para extraer datos. Opcionalmente, puedes utilizarla con una API KEY.
                        </p>
                        <ul className='actions'>
                            <li><a href='https://irvingc48.github.io/dashboard/?classId=9a1e158c-da0e-4a40-a29f-a267be985605&assignmentId=6237d20a-5980-47d3-a14a-8e7397001c3d&submissionId=c8ca4b6d-aed0-26f5-d099-55cc0bafb469' className='button'>Visítalo</a></li>
                            <li><a href='https://github.com/Equipo01-UCamp/dashboard.git' className='button'>Repositorio</a></li>
                        </ul>
                    </div> 
                    <span className='image'><img src='../images/app3.png' alt='' /></span>
                </div>
            </section> 
            
    )
}

export default Aplicacion3
