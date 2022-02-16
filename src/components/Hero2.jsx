import BgImage from '../assets/images/img6.jpg'
const Hero2 = () => {
  return (
    <div className="w-full md:h-screen  flex flex-col pt-0 md:pt-0 md:flex-row md:justify-center md:items-center md:pb-0 md:mt-25">
      <div className=" md:h-screen flex flex-col justify-around align-center  w-full max-w-xl px-4 mx-auto md:px-8 md:max-w-screen-xl">
        <div className="mb-16 md:my-48 md:max-w-lg md:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                New Colaboration
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{' '}
              <span className="inline-block text-deep-purple-accent-400">
                a lazy dog
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-blue transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Apply Now
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="md:h-screen right-0 w-full max-w-xl px-4 mx-auto md:pl-8 md:pr-0 md:mb-0 md:mx-0 md:w-1/2 md:max-w-full md:absolute xl:px-0">
        <img
          className="object-cover w-full rounded shadow-lg md:rounded-none md:shadow-none sm:h-96 md:h-screen"
          src={BgImage}
          alt=""
        />
        <div className="bg-gris-capres-800 w-full md:h-full"></div>
      </div>
    </div>
  )
}

export default Hero2
