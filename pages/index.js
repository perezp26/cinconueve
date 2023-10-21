import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
      <Layout>
                  <div className={`flex ${styles.cintilla }`}>
                        <div className={`w-1/3  ${ styles.naranja} ` }></div>
                        <div className={`w-2/3  ${ styles.verde}` }></div>
                  </div>
                  <div className={`${ styles.fondo } ${ styles.naranja }`} >
                            <div className='md:flex'>
                                <div className=' text-white font-extralight md:p-36 p-7 text-4xl text-center '>
                                      <p>
                                        Somos una empresa  mexicana con más de 25 años en el ramo de la contrucción industrial, residencial y comercial,
                                        anteponiendo la honestidad y claridad con nuestros clientes
                                      </p>
                                </div>
                            </div>
                  </div>
                  <div className={`flex ${styles.cintilla }`}>
                        <div className={`w-2/3  ${ styles.verde} ` }></div>
                        <div className={`w-1/3  ${ styles.naranja}` }></div>
                  </div>
      </Layout>
  )
}
