import "./App.css";
import Logo from "./assets/img/Logo";

function App() {
  return (
    <div className="overflow-hidden">
      <div className="">
        <nav className="fixed w-screen top-0 z-50 bg-black ">
          <div className="flex justify-around mx-auto pt-16 pb-3 px-5 z-10 w-screen container">
            <div className="flex justify-around w-full">
              <div className="h-full flex justify-center items-center">
                <img
                  src="https://assets.website-files.com/62f52e1f730760cd231bb250/6304ab8caaccdbd0be31d14f_logo.svg"
                  alt=""
                  className="h-10"
                />
              </div>

              <ul className="flex items-center uppercase text-[rgba(188,243,255,.8)] gap-12">
                <li>
                  <a href="/">crypto</a>{" "}
                </li>
                <li>
                  <a href="/">getting</a>
                </li>
                <li>
                  <a href="/">about</a>
                </li>
                <li>
                  <a href="/">mobile app</a>
                </li>
              </ul>
            </div>
            <div className="flex w-full justify-end">
              <button className="bg-transparent border border-[rgba(188,243,255,.8)] text-[rgba(188,243,255,.8)] px-10 py-5 uppercase">
                start now
              </button>
            </div>
          </div>
        </nav>
        <section
          id="hero-section"
          className="relative h-screen flex flex-col justify-between z-0 mt-32"
        >
          <div className="relative flex py-5">
            <div className="relative top-10 left-48 z-10">
              <img
                className="w-40"
                src="https://assets.website-files.com/62f52e1f730760cd231bb250/6304ab8c32da771a4d808036_all-in-one.png"
                alt=""
              />
            </div>
            <div className="hero-content relative mt-60 ml-60 flex flex-col uppercase text-white z-10 tracking-widest">
              <div className="text-[14.75rem] max-h-52 mb-7 hero-header">
                crypto
              </div>
              <div className="flex flex-row">
                <h3 className="text-[10.5rem] hero-header">card</h3>
                <p className=" max-w-md text-[2rem] ml-40 flex items-end leading-none">
                  convert cryptocurrencies and pay with your mastercard
                </p>
              </div>
            </div>
            <img
              className="absolute overflow-hidden -top-[6rem] -right-[25rem] w-[81.25rem]"
              src="https://assets.website-files.com/62f52e1f730760cd231bb250/6304b0f792724a8300208a1a_hero-card-p-1600.webp"
              alt=""
            />
          </div>
          <div id="banner" className="relative w-full flex items-end pb-40">
            <div className="w-full py-20 bg-gradient-to-r from-[#4c7983] to-[#7b555a] text-white">
              <div className="">
                <div className="flex flex-row justify-between items-center font2 px-24">
                  <div className="flex flex-col justify-between max-w-2xl min-h-[10.25rem]">
                    GET A FREE VIRTUAL CARDIN JUST MINUTES
                    <h3 className="text-[2.5rem] font-semibold">
                      Getting a card in just minutes? Yes! <br /> Apply for a
                      virtual Gypto Card.
                    </h3>
                  </div>
                  <div className="flex flex-row justify-between uppercase gap-x-20">
                    <div className="text-center">
                      <div className="text-8xl font2">1%</div>
                      <div className="my-6">
                        <hr />
                      </div>
                      <div>trading fee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-8xl font2">20</div>
                      <div className="my-6">
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
        <section id="about-section" className="relative mb-52">
          <div className="relative container mx-auto w-full flex justify-between grid-x-[13rem]">
            <div className="max-w-[13rem]">
              <div className="flex flex-col">
                <div className="w-36 mb-12">
                  <img
                    src="https://assets.website-files.com/62f52e1f730760cd231bb250/62f53fa7512f1575b99867ce_logo-holograph.webp"
                    alt=""
                  />
                </div>
                <div>
                  <p className="font2 uppercase text-white">
                    WE’RE BUILDING A CRYPTOCURRENCY ECONOMY
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="w-[60rem]">
                  <img
                    className=" mr-0"
                    src="https://assets.website-files.com/62f52e1f730760cd231bb250/62f60b45d6557df4c495ec5a_about-p-1080.webp"
                    alt=""
                  />
                  <div className="relative -mt-[2.64rem] w-full flex justify-between gap-x-[14.31rem]">
                    <div className="">
                      <a className="uppercase text-white" href="/">
                        about
                      </a>
                    </div>
                    <div className="">
                      <p className="text-white text-3xl font-semibold font2">
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
        <section id="mobile-app" className="relative container mx-auto mb-52">
          <div className="h-[44rem]">
            <div className="MobileBg h-full overflow-hidden">
              <img
                className="relative -top-1/2 overflow-hidden"
                src="https://assets.website-files.com/62f52e1f730760cd231bb250/62f53fa7ea32febc8972ff5a_phones-p-1600.webp"
                alt=""
              />
            </div>
            <div className="text-white relative flex justify-around -top-16 font-semibold font2">
              <div className="relative uppercase">Mobile App</div>
              <div className="relative max-w-[40rem]">
                <h2 className="relative text-[2.5rem]">
                  Buy, sell, and send digital currencies at the touch of a
                  button, with no hidden fees. Gypto cryptocurrency.
                </h2>
              </div>
              <div className="relative uppercase">trading fee</div>
            </div>
          </div>
        </section>
        <footer className="container mx-auto w-full mt-36 p-8">
          <div>
            <hr />
          </div>
          
          <div className="relative w-full flex justify-between text-white my-28">
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
                <div>Crypto Card</div>
                <div>Getting</div>
                <div>Mobile App</div>
                <div>About</div>
              </div>
            </div>
            <div className="w-1/3 font3">
              <div className="text-[1.5rem] font-medium">CONTACT</div>
              <div className="grid gap-4 grid-cols-2 mt-12">
                <div>www.halo-lab.com</div>
                <div>UA: +38 096 272 2100</div>
                <div>mail@halo-lab.com</div>
                <div>Ukraine, Odessa, 65058</div>
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
