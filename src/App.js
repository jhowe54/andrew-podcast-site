import logo from './logo.svg';
import Hero from './components/main/Hero';
import { classNames }   from "./utils/classNames";
function App() {
  return (
    <div className="App flex flex-col">
      <div className="mt-10 flex flex-col justify-center content-center text-white text-4xl bg ">
        <Hero />
      </div>
      <main className="flex flex-col items-center text-white">
        <section id="gallery" className={classNames.sectionNorm}>
          
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
