import { useState } from "react";
import "animate.css";
import "./App.css";

function App() {
  const [closeAlert, setCloseAlert] = useState()
  return (
    <div className="overflow-hidden">
      <div 
        onClick={() => setCloseAlert(' animate-fade-up animate-ease-out animate-reverse animate-fill-forwards')}
        className={"fixed w-screen h-screen z-[999] bg-[#00000087] text-gray-800 " + closeAlert}
      >
        <div className="animate-fade-up animate-ease-in animate-fill-forwards">
          <div className="flex justify-center bg-yellow-200 max-w-sm rounded-2xl mx-auto mt-32">
            <div className="w-16 bg-yellow-300">
              <div className="p-4">
                <svg
                  className="h-8 w-8 text-black fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M503.191 381.957c-.055-.096-.111-.19-.168-.286L312.267 63.218l-.059-.098c-9.104-15.01-23.51-25.577-40.561-29.752-17.053-4.178-34.709-1.461-49.72 7.644a66 66 0 0 0-22.108 22.109l-.058.097L9.004 381.669c-.057.096-.113.191-.168.287-8.779 15.203-11.112 32.915-6.569 49.872 4.543 16.958 15.416 31.131 30.62 39.91a65.88 65.88 0 0 0 32.143 8.804l.228.001h381.513l.227.001c36.237-.399 65.395-30.205 64.997-66.444a65.86 65.86 0 0 0-8.804-32.143zm-56.552 57.224H65.389a24.397 24.397 0 0 1-11.82-3.263c-5.635-3.253-9.665-8.507-11.349-14.792a24.196 24.196 0 0 1 2.365-18.364L235.211 84.53a24.453 24.453 0 0 1 8.169-8.154c5.564-3.374 12.11-4.381 18.429-2.833 6.305 1.544 11.633 5.444 15.009 10.986L467.44 402.76a24.402 24.402 0 0 1 3.194 11.793c.149 13.401-10.608 24.428-23.995 24.628z" />
                  <path d="M256.013 168.924c-11.422 0-20.681 9.26-20.681 20.681v90.085c0 11.423 9.26 20.681 20.681 20.681 11.423 0 20.681-9.259 20.681-20.681v-90.085c.001-11.421-9.258-20.681-20.681-20.681zM270.635 355.151c-3.843-3.851-9.173-6.057-14.624-6.057a20.831 20.831 0 0 0-14.624 6.057c-3.842 3.851-6.057 9.182-6.057 14.624 0 5.452 2.215 10.774 6.057 14.624a20.822 20.822 0 0 0 14.624 6.057c5.45 0 10.772-2.206 14.624-6.057a20.806 20.806 0 0 0 6.057-14.624 20.83 20.83 0 0 0-6.057-14.624z" />
                </svg>
              </div>
            </div>

            <div className="w-auto text-grey-darker items-center p-4">
              <p className="leading-tight font2">
                Please be aware, this website is still in progress and not yet mobile responsive. Take a look at my other <a className="text-lg text-black underline underline-offset-4" href="https://www.keagan.website" target="_blank" rel="noreferrer">projects</a>
              </p>
            </div>
            <div className="mr-2 mt-2">
              <button className="ml-auto">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <nav className="absolute w-full animate-in slide-in-from-top duration-1000 top-0 z-50 font2">
          <div className="flex justify-around mt-16 z-10 mx-20">
            <div className="flex justify-between gap-x-[6rem] w-full">
              <div className="h-full flex justify-center items-center">
                <img
                  src="https://assets.website-files.com/62f52e1f730760cd231bb250/6304ab8caaccdbd0be31d14f_logo.svg"
                  alt=""
                  className="h-10"
                />
              </div>

              <ul className="flex items-center uppercase text-[rgba(188,243,255,.8)] gap-12">
                <li>
                  <a className="btns spacing" href="/">
                    crypto
                  </a>{" "}
                </li>
                <li>
                  <a className="btns spacing" href="/">
                    getting
                  </a>
                </li>
                <li>
                  <a className="btns spacing" href="/">
                    about
                  </a>
                </li>
                <li>
                  <a className="btns spacing" href="/">
                    mobile app
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-4/5 justify-end">
              <button className="navbar-btn bg-transparent border border-[rgba(188,243,255,.8)] text-[rgba(188,243,255,.8)]">
                start now
              </button>
            </div>
          </div>
        </nav>
        <section
          id="hero-section"
          className="relative h-screen flex flex-col justify-between z-0 mt-32"
        >
          <div className="flex mx-20 py-5">
            <div className="absolute flex animate-in zoom-in duration-1000 pt-7 z-10 w-48 h-48">
              <img
                className="animate-spin-slow"
                src="https://assets.website-files.com/62f52e1f730760cd231bb250/6304ab8c32da771a4d808036_all-in-one.png"
                alt=""
              />
            </div>
            <div className="hero-content  mt-48 ml-48 flex flex-col uppercase text-white z-10     tracking-widest">
              <div className="flex text-[14.75rem] max-h-52 mb-7 hero-header">
                <div className="animate-flip-up animate-delay-[500ms]">C</div>
                <div className="animate-flip-up animate-delay-[600ms]">R</div>
                <div className="animate-flip-up animate-delay-[700ms]">Y</div>
                <div className="animate-flip-up animate-delay-[800ms]">P</div>
                <div className="animate-flip-up animate-delay-[900ms]">T</div>
                <div className="animate-flip-up animate-delay-[1000ms]">O</div>
              </div>
              <div className="flex flex-row">
                <h3 className="flex text-[10.5rem] hero-header">
                  <div className="animate-flip-up animate-delay-[1100ms]">
                    c
                  </div>
                  <div className="animate-flip-up animate-delay-[1200ms]">
                    a
                  </div>
                  <div className="animate-flip-up animate-delay-[1300ms]">
                    r
                  </div>
                  <div className="animate-flip-up animate-delay-[1400ms]">
                    d
                  </div>
                </h3>
                <p className="overflow-hidden animate-fade-right animate-delay-[1400ms] max-w-md text-[2.43rem] font-bold ml-28 flex items-end leading-none">
                  convert cryptocurrencies and pay with your mastercard
                </p>
              </div>
            </div>
            <img
              className="absolute overflow-hidden animate__animated animate__rotateInUpRight -top-[7.5rem] -right-[33rem] w-[81.25rem]"
              src="https://assets.website-files.com/62f52e1f730760cd231bb250/6304b0f792724a8300208a1a_hero-card-p-1600.webp"
              alt=""
            />
          </div>
          <div id="banner" className="relative w-full flex items-end pb-40">
            <div className="w-full py-20 bg-gradient-to-r from-[#4c7983] to-[#7b555a] ">
              <div className="">
                <div className="flex flex-row justify-between items-center animate-fade-up animate-delay-[500ms] font2 px-24">
                  <div className="flex flex-col justify-between max-w-2xl min-h-[10.25rem]">
                    GET A FREE VIRTUAL CARDIN JUST MINUTES
                    <h3 className="text-[2.5rem] font-semibold text-white">
                      Getting a card in just minutes? Yes! <br /> Apply for a
                      virtual Gypto Card.
                    </h3>
                  </div>
                  <div className="flex flex-row justify-between uppercase gap-x-20">
                    <div className="text-center">
                      <div className="text-8xl font2">1%</div>
                      <div className="mb-6">
                        <hr />
                      </div>
                      <div>trading fee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-8xl font2">20</div>
                      <div className="mb-6">
                        <hr />
                      </div>
                      <div>wallet types</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about-section"
          className="relative mb-52  mx-20 animate-fade-up animate-ease-in animate-fill-forwards"
        >
          <div className=" container mx-auto w-full flex justify-between grid-x-[13rem]">
            <div className="max-w-[13rem]">
              <div className="flex flex-col">
                <div className="relative w-36 mb-12 overflow-hidden bg-cover bg-no-repeat z-20">
                  <img
                    src="https://assets.website-files.com/62f52e1f730760cd231bb250/62f53fa7512f1575b99867ce_logo-holograph.webp"
                    className="transform transition duration-300 ease-in-out hover:scale-125 "
                    alt=""
                  />
                </div>
                <div>
                  <p className="font2 uppercase">
                    WE’RE BUILDING A CRYPTOCURRENCY ECONOMY
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="relative w-[60rem]">
                  <div className="relative w-full  overflow-hidden bg-cover bg-no-repeat z-20">
                    <div className="transform transition duration-300 ease-in-out hover:scale-125">
                      <img
                        className=""
                        src="https://assets.website-files.com/62f52e1f730760cd231bb250/62f60b45d6557df4c495ec5a_about-p-1080.webp"
                        alt=""
                      />
                      <div className="image"></div>
                    </div>
                  </div>

                  <div className="relative z-10 -mt-[2.64rem] w-full font2 flex justify-between gap-x-[14.31rem]">
                    <div className="">
                      <a className="uppercase " href="/">
                        about
                      </a>
                    </div>
                    <div className="">
                      <p className="text-white text-3xl font-semibold ">
                        Gypto is one of the most popular digital currency
                        exchanges in the world. Its Gypto Card lets cardholders
                        spend their cryptocurrency anywhere
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="mobile-app" className="relative mx-20 mb-52">
          <div className="h-[44rem]">
            <div className="MobileBg  h-full overflow-hidden">
              <img
                className="relative -top-1/2 overflow-hidden"
                src="https://assets.website-files.com/62f52e1f730760cd231bb250/62f53fa7ea32febc8972ff5a_phones-p-1600.webp"
                alt=""
              />
              <div className="image"></div>
            </div>
            <div className="relative z-10 flex justify-around -top-16 font2">
              <div className=" uppercase">Mobile App</div>
              <div className=" max-w-[40rem]">
                <h2 className=" text-[2.5rem] font-semibold text-white">
                  Buy, sell, and send digital currencies at the touch of a
                  button, with no hidden fees. Gypto cryptocurrency.
                </h2>
              </div>
              <div className=" uppercase">trading fee</div>
            </div>
          </div>
        </section>
        <footer className="mx-20 mt-36 p-8">
          <div>
            <hr />
          </div>

          <div className=" flex justify-between gap-x-12 text-white my-28">
            <div className="w-1/4">
              <div className="text-5xl font-semibold">GYRPTO</div>
              <div className="mt-12 font2">
                The addition of larger design studios, offering customers
                private space
              </div>
            </div>
            <div className="w-1/4 font3">
              <div className="text-[1.5rem] font-medium">SITEMAP</div>
              <div className="grid gap-4 grid-cols-2 mt-12">
                <div className="btns">Crypto Card</div>
                <div className="btns">Getting</div>
                <div className="btns">Mobile App</div>
                <div className="btns">About</div>
              </div>
            </div>
            <div className="w-1/2 font3">
              <div className="text-[1.5rem] font-medium">CONTACT</div>
              <div className="grid gap-4 grid-cols-2 mt-12">
                <div className="btns"> www.halo-lab.com</div>
                <div className="btns"> UA: +38 096 272 2100</div>
                <div className="btns"> mail@halo-lab.com</div>
                <div className="btns"> Ukraine, Odessa, 65058</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center text-white font2 mb-8">
            <div>
              Made with &#10084; by{" "}
              <a
                className="text-[#fd6873]"
                href="https://www.keagan.website"
                target="_blank"
                rel="noreferrer"
              >
                Keagan Latarewicz
              </a>
            </div>
            <div>
              Original mockup from:{" "}
              <a
                className="text-[#fd6873]"
                href="https://dribbble.com/shots/19270012-GYPTO-Webflow-Landing"
                target="_blank"
                rel="noreferrer"
              >
                Halo Lab - Dribble
              </a>
            </div>
          </div>
        </footer>
        <div className="h-12 w-screen bg-gradient-to-r from-[#4c7983] to-[#785257]"></div>
      </div>
    </div>
  );
}

export default App;
