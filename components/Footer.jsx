import { useState } from 'react'
import Image from 'next/image'

import styles from '../styles/footer.module.css'

const Footer = () => {

const [today, settoday] = useState(new Date())
  

  return (
    <footer className={ `${styles.footer} ` }> 
        <div className='md:flex'>
            <div className='md:w-1/3'></div>
            <div className='md:w-1/3 text-center'>
                    <p className=' font-extralight text-2xl py-1'>Aviso de Privacidad</p>
                    <p className=' font-extralight text-2xl py-1'>Términos y condiciones</p>
                    <p className=' font-extralight text-2xl py-1'>cinconueve { today.getFullYear() } derechos reservados </p>
            </div>
            <div className='md:w-1/3  flex md:mt-0 mt-5'>
                  <div className=' w-full flex  m-auto '>
                      <div className='w-1/3 '>
                              <Image src='/imgs/whatsapp.png' width={ 45 }  height={ 45 } alt="facebook" className=' mx-auto ' />
                      </div>
                      <div className='w-1/3'>
                              <Image src='/imgs/google.png' width={ 45 }  height={ 45 } alt="facebook" className=' mx-auto ' />
                      </div>
                      <div className='w-1/3'>
                              <Image src='/imgs/facebook.png' width={ 45 }  height={ 45 } alt="facebook" className=' mx-auto ' />
                      </div>
                  </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer