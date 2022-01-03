import React from 'react'

const Footer = () => {
    return (
            <footer id='footer'>
                <section>
                    <h2>Algo más...</h2>
                    <p>"...El buen código es la mejor documentación..."</p>
                    <p>"Si la depuración es el proceso de eliminar errores, entonces la programación debe ser el proceso de introducirlos"</p>
                </section>
                <section>
                    <h2>Contaco</h2>
                    <dl className='alt'>
                        <dt>Dirección</dt>
                        <dd>Oriente 1 UHP, Tula de Allende Hgo.</dd>
                        <dt>Teléfono</dt>
                        <dd>772-7878-123</dd>
                        <dt>Email</dt>
                        <dd><a href='#'>paola.cortes.sanchez@gmail.com</a></dd>
                    </dl>
                    <ul className='icons'>
                        <li><a href='#' className='icon brands fa-twitter alt'><span className='label'>Twitter</span></a></li>
                        <li><a href='#' className='icon brands fa-facebook-f alt'><span className='label'>Facebook</span></a></li>
                        <li><a href='#' className='icon brands fa-instagram alt'><span className='label'>Instagram</span></a></li>
                        <li><a href='#' className='icon brands fa-github alt'><span className='label'>GitHub</span></a></li>
                        <li><a href='#' className='icon brands fa-dribbble alt'><span className='label'>Dribbble</span></a></li>
                    </ul>
                </section>
                <p className='copyright'>&copy; Untitled. Design: <a href='https://html5up.net'>HTML5 UP</a>.</p>
            </footer>
    )
}

export default Footer
