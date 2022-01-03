import React from 'react'

const Second = () => {
    return (
            <section id='second' className='main special'>
                <header className='major'>
                    <h2>Experiencia</h2>
                    <p>Proyectos personales desarrollados con el proposito de practicar y reforzar
                        los conocmientos adquiridos.
                    </p>
                </header>
                <ul className='statistics'>
                    <li className='style1'>
                        <span className='icon solid fa-code-branch'></span>
                        <strong>App 1</strong>Landing de Negocio
                    </li>
                    <li className='style2'>
                        <span className='icon fa-folder-open'></span>
                        <strong>App 2</strong>CRUD de Datos
                    </li>
                    <li className='style3'>
                        <span className='icon solid fa-signal'></span>
                        <strong>App 3</strong>Tablero de Datos
                    </li>
                    <li className='style4'>
                        <span className='icon solid fa-laptop'></span>
                        <strong>App 4</strong>Restaurante
                    </li>
                    <li className='style5'>
                        <span className='icon fa-gem'></span>
                        <strong>App 5</strong>ECommerce
                    </li>
            </ul>
            <p className='content'>
                Cada aplicacion enlistada aumenta la complejidad en su desarrollo.
                <br></br>
                <b>App 1:</b> Este proyecto está enfocado en una página "landing" para un negocio, donde se
                establecio mensajes del negocio (¿qué se vende?), breve catálogo de productos,
                vista adaptable a móviles.
                <br></br>
                <b>App 2:</b> En este proyecto se construyo una aplicación que involucre las 4
                operaciones CRUD (Crear, Consultar, Modificar y Eliminar).
                <br></br>
                <b>App 3:</b> En este proyecto se construyo una aplicación que consuma una API de tipo
                pública y otra privada.
                <br></br>
                <b>App 4:</b> Este proyecto está enfocado en una aplicación web para un restaurante.
                <br></br>
                <b>App 5:</b> Este proyecto está enfocado en una aplicación de eCommerce.
            </p>

            <footer className='major'>
                <ul className='actions special'>
                       
                    </ul>
                </footer>
            </section>
    )
}

export default Second
