import React from 'react'

const First = () => {
    return (
            <section id='first' className='main special'>
                <header className='major'>
                    <h2>Formación</h2>
                </header>
                <ul className='features'>
                    <li>
                        <span className='icon solid major style1 fa-code'></span>
                        <h3><b>Tec. en Informática</b></h3>
                        <p>Carrera Técnica en Informática del 20 de Agosto de 2014 al 20 de Agosto de 2017 
                        en el Centro de Bachillerato Técnologico Industrial y de Servicios 26 (CTIS) 
                        con sede en Atitalaquia Hgo.</p>
                    </li>
                    <li>
                        <span className='icon major style3 fa-copy'></span>
                        <h3><b>Ing. en Sistemas Computacionales</b></h3>
                        <p>Especialidad en desarrollo de aplciaciones web y mobiles del 20 de Agosto de 2017 
                            al 20 de Agosto de 2020 en el Instituto Tecnologico Superior del Occidente del Estado
                            de Hidalgo con sede en Mixquiahuala Hgo.</p>
                    </li>
                    <li>
                        <span className='icon major style5 fa-gem'></span>
                        <h3><b>Developer Full Stack</b></h3>
                        <p>Curso para desarrollo Full Stack con NodeJS, MongoDB, ReactJS, CSS, HTML y JavaScript
                            del 20 de Junio de 2021 al 20 de Noviembre de 2021 en modalidad ONLINE.</p>
                    </li>
                </ul>
                <footer className='major'>
                    <ul className='actions special'>
                    </ul>
                </footer>
            </section>
    )
}

export default First
