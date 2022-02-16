import React from 'react'
import HeroImg from '../assets/images/img6.jpg'

export const Hero = () => {
  return (
    <div className=" top-0 left-0 w-full h-[100vh] items-center justify-center flex flex-col pt-0 lg:pt-0 lg:flex-col lg:pb-0 lg:mt-25">
      <div className="flex flex-col md:self-center items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-2xl">
        <div className="mb-16 sm:my- md:my-72 lg:my-80 md:max-w-md lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-8">
            <h2 className="max-w-lg mb-6 font-heading font-[800] tracking-tight text-azul-capres-700 text-4xl md:text-7xl sm:leading-none">
              Capres, <br className="hidden md:block" />
              <span className="text-gris-capres-700">tu caja</span>{' '}
              <span className="inline-block text-gris-capres-700">
                de ahorros
              </span>
            </h2>
            <p className="text-base text-gris-capres-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-azul-capres-600 hover:bg-azul-capres-700 focus:shadow-outline focus:outline-none"
            >
              No tienes cuenta?
            </a>
            {/*  <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gris-capres-800 transition-colors duration-200 hover:text-azul-capres-700"
            >
              Learn more
            </a> */}
          </div>
        </div>
      </div>
      <div>
        <div className="inset-y-0 right-auto  w-full  px-4 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-auto lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-auto rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-screen"
            src={HeroImg}
            alt=""
          />
          <div className="bg-gris-capres-800/30  inset-y-0 md:left-auto w-full h-screen  px-4 mx-auto md:w-full md:max-w-full lg:absolute xl:px-0"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
