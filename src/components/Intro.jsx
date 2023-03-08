import UseAnimations from "react-useanimations"
import download from "react-useanimations/lib/download"
function Intro() {
  return (
    <div className="my-12 flex flex-col gap-4">
      <div>
        <h3 className="text-2xl">¡Hola! Soy</h3>
        <h1 className="text-sky-600 font-bold text-6xl">Leonel Huachaca</h1>
        <h3 className="text-sky-300 text-2xl">FrontEnd Developer</h3>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg">
          Disfruto mucho de la programación web , aspiro ser un profesional que de lo mejor de si y enfrentar a nuevos retos. Siempre me emociona aprender nuevas tecnologías y
          enfoques innovadores.
        </p>
        <a className="bg-sky-600 px-4 py-2 rounded-md text-white w-max flex items-center gap-2 cursor-pointer hover:scale-105 hover:bg-sky-800 mt-8" target="_blank">
          Descargar CV <UseAnimations animation={download} size={22} strokeColor="#fff" />
        </a>
      </div>
    </div>
  )
}
export default Intro
