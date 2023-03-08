import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <div className="bg-black text-white pt-24">
        <Header />
        <div className="w-3/4 mx-auto md:w-6/12">
          <Intro />
        </div>
        <div className="w-3/4 mx-auto">
          <Projects />
          <Skills />
          <Contact />
        </div>
        <div className="bg-sky-600 mt-12">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
