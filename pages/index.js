import firebase from "./../firebase/firebase";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import Carousel from "../components/Carousel";

const Index = ({ heroSection, aboutSection }) => {
  return (
    <>
      <Head>
        <title>Logo Ipsum</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <article>
        <div className="bg-white h-screen mt-5 md:mt-0">
          <div className="container mx-auto h-full px-4">
            <div className="flex flex-wrap justify-center h-full items-center md:flex-row flex-col">
              <div className="md:order-first order-last w-full sm:w-1/2 lg:w-1/2">
                <span className="font-bold text-sm text-pink-400 bg-pink-200 py-1 px-3 rounded-full">
                  {heroSection.content.subTitle}
                </span>
                <h1 className="md:text-4xl text-2xl text-dark-blue-logo font-bold mt-4">
                  {heroSection.content.title}
                </h1>
                <p className="text-gray-400 mt-5 md:text-xl md:w-2/3">
                  {heroSection.content.description}
                </p>
                <div className="my-10">
                  <button className="hover:bg-pink-700 bg-purple-logo shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white text-sm py-3 px-6 rounded font-bold mr-5 transition duration-200 ease-in-out">
                    {heroSection.content.ctaButton1}
                  </button>
                  <button className=" text-blue-logo shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white text-sm py-3 px-6 rounded font-bold mr-5 transition duration-200 ease-in-out">
                    {heroSection.content.ctaButton2}
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <Fade right>
                  <img
                    src="/images/hero-image.png"
                    className="w-72 md:w-full"
                    alt="s"
                    srcset=""
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-20">
          <div className="container mx-auto h-full px-4">
            <div className="flex justify-center items-center h-full flex-col text-center divide-y divide-gray-200">
              <Fade bottom>
                <div className="mb-14">
                  <span className="text-blue-logo font-bold ">
                    {aboutSection.content.subTitle}
                  </span>
                  <h1 className="md:text-5xl text-3xl font-bold text-dark-blue-logo">
                    {aboutSection.content.title}
                  </h1>
                </div>
                <p className="py-14 text-gray-500 font-light text-xl md:w-9/12">
                  {aboutSection.content.description}
                </p>
                <div className="flex flex-col md:flex-row pt-10 jusify-center">
                  <div className="md:px-10 py-10 bg-white shadow-lg hover:shadow-md hover:ring-4 hover:ring-pink-300 transition-shadow rounded-lg md:mr-4 my-4">
                    <h1 className="font-bold md:text-5xl text-7xl text-blue-logo">
                      {aboutSection.content.number1}
                    </h1>
                    <p className="font-bold text-lg text-dark-blue-logo mt-4">
                      {aboutSection.content.text1}
                    </p>
                  </div>
                  <div className="md:px-10 py-10 bg-white shadow-lg hover:shadow-md hover:ring-4 hover:ring-pink-300 transition-shadow rounded-lg md:mr-4 my-4">
                    <h1 className="font-bold md:text-5xl text-7xl text-blue-logo">
                      {aboutSection.content.number2}
                    </h1>
                    <p className="font-bold text-lg text-dark-blue-logo mt-4">
                      {aboutSection.content.text2}
                    </p>
                  </div>
                  <div className="md:px-10 py-10 bg-white shadow-lg hover:shadow-md hover:ring-4 hover:ring-pink-300 transition-shadow rounded-lg md:mr-4 my-4">
                    <h1 className="font-bold md:text-5xl text-7xl text-blue-logo">
                      {aboutSection.content.number3}
                    </h1>
                    <p className="font-bold text-lg text-dark-blue-logo mt-4">
                      {aboutSection.content.text3}
                    </p>
                  </div>
                  <div className="md:px-10 py-10 bg-white shadow-lg hover:shadow-md hover:ring-4 hover:ring-pink-300 transition-shadow rounded-lg md:mr-4 my-4">
                    <h1 className="font-bold md:text-5xl text-7xl text-blue-logo">
                      {aboutSection.content.number4}
                    </h1>
                    <p className="font-bold text-lg text-dark-blue-logo mt-4">
                      {aboutSection.content.text4}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 ">
          <Carousel />
        </div>
      </article>

      <footer className="bg-purple-logo mt-5 bg-opacity-90">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-pink-800 mt-4">
              🦑created by <a href="https://github.com/pebriancharliady" className="text-pink-900 font-bold" target="_blank"> github.com/pebriancharliady🦑</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Index.getInitialProps = async () => {
  const firestore = firebase.firestore();
  const heroSection = await firestore
    .collection("web")
    .doc("heroSection")
    .get();
  const aboutSection = await firestore
    .collection("web")
    .doc("aboutSection")
    .get();
  return {
    heroSection: heroSection.data(),
    aboutSection: aboutSection.data(),
  };
};

export default Index;
