import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
const Layout = ({children, titulo = '', description = 'Nutrición, vida saludable, control de peso'}) => {
  return (
        <>
            <Head>
                <title >{ `Cinco Nueve - ${ titulo }`}</title>
            </Head>
            <Header />
                <main>
                {/* <main className='animate__animated animate__fadeIn '> */}
                    <div className=''>
                          <div className=' text-center ' >
                             { children }
                          </div>
                    </div>
                </main>

                <Footer /> 

        </>
  ) 
}

export default Layout