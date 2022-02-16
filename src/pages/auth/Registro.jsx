import React from 'react'
import Logo from '../../assets/images/capres.jpg'

function Registro() {
  return (
    <section class="text-gris-capres-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img src={Logo} alt="Capres Logo" className="mb-10 -mt-10" />
          <h1 class="title-font font-medium text-3xl text-gris-capres-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p class="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gris-capres-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gris-capres-900 text-2xl font-medium title-font mb-5">
            Registro
          </h2>
          <div class="relative mb-4">
            <label
              for="full-name"
              class="leading-7 text-sm text-gris-capres-600"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full bg-white rounded border border-gris-capres-300 focus:border-azul-capres-700 text-base outline-none text-gris-capres-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gris-capres-600">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gris-capres-300 focus:border-azul-capres-700 focus:ring-2 focus:ring-azul-capres-200 text-base outline-none text-gris-capres-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="text-white bg-azul-capres-700 border-0 py-2 px-8 focus:outline-none hover:bg-azul-capres-500 rounded text-lg">
            Registro
          </button>
          <p class="text-xs text-gris-capres-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Registro
