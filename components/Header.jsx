import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/header.module.css'


const Header = () => {
  return (
    <header className={ `relative ${ styles.header} ` }>
         <div className='mx-auto md:flex '>
            <div className='md: w-1/3'>
                    <Image src='/imgs/logoCincoNueve.png' width={ 285 }  height={ 243 } alt="CincoNueve" className=' mx-auto ' />
            </div>
            <div className='md: w-2/3 flex  md:justify-center md:pt-7'>
                      <div className='    '>
                          <nav className={`${styles.navegacion}`}>
                              <Link href="/">
                                  Inicio
                              </Link>
                              <Link href="/nosotros">
                                  Nosotros
                              </Link>
                              <Link href="/servicios">
                                  Servicios
                              </Link>
                              <Link href="/contacto">
                                Contacto
                              </Link>
                          </nav>

                      </div>
            </div>
        </div>
    </header>
  )
}

export default Header