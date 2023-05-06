import logo from "./logo.svg";
import Hero from "./components/main/Hero";
import { classNames } from "./utils/classNames";
import Title from "./components/header/Title";
import NavBar from "./components/header/NavBar";
import Carriage from "./components/main/Carriage";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import ArticleSnippet from "./components/main/ArticleSnippet";
import Footer from "./components/footer/Footer";
function App() {

  const [images, setImages] = useState([])
  useEffect(() => {
    setImages(["https://cdn-7.motorsport.com/images/amp/YW7ybVDY/s1000/formula-1-monaco-gp-2021-lewis-2.jpg", "https://dummyimage.com/640x360/fff/aaa", "https://dummyimage.com/640x360/fff/aaa"])
  }, [])
  return (
    <div id="background">
      <div id="mask" className="w-screen">
        <div id="content" className="flex flex-col">
          <header className="h-[40vh] text-white shadow-md">
            <section className="p-4 h-full grid grid-rows-2 bg-white text-black">
              <Title />
              <NavBar />
            </section>
          </header>
          <main className="bg-transparent flex flex-col items-center  text-white">
            <section className=" w-full my-10">
              <Carriage images={images} imageHeight={200} imageWidth={400} />
            </section>
            <section id="articleSnippet" className="mb-10 bg-transparent w-full p-4 text-white">
              <ArticleSnippet />
            </section>
          </main>
          <footer>
            <section className=" w-full h-[200px] text-white bg bg-black p-4 flex flex-col items-center justify-center content-center text-center ">
              <Footer />
            </section>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
