import logo from './logo.svg';
import Hero from './components/main/Hero';
import { classNames }   from "./utils/classNames";
import Title from './components/header/Title';
import NavBar from './components/header/NavBar';
import Gallery from './components/main/Gallery';
function App() {
  return (
    <div className="App flex flex-col">
      <div id="hero" className="bg h-[60vh] flex flex-col justify-center content-center text-white text-4xl bg  z-0">
        <div id="mask" className='w-full h-full'>
          <Title />
        <Hero />
        
        </div>
        
      </div>
      <NavBar />
      <main className="flex flex-col items-center text-white">
        <section id="gallery" className={classNames.sectionNorm}>
          <Gallery />
        </section>
        <section id="media" className={classNames.sectionGallery}>
       
        </section>
        <section id="shows" className={classNames.sectionNorm}>
        
        </section>
        <section id="shows" className={classNames.sectionNorm}>
       
        </section>
       
      </main>
      <footer>   
        <section className="text-white p-4 flex flex-col items-center justify-center content-center text-center h-100 pb-20 ">
       
        </section>
      </footer>
    </div>
  );
}

export default App;
