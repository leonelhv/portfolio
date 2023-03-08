import UseAnimations from "react-useanimations"
import github from "react-useanimations/lib/github"
function Header() {
  return (
    <header className="fixed z-10 bg-black/80 w-full top-0 left-0 backdrop-blur-sm">
      <div className="w-3/4 mx-auto">
        <div className="flex justify-between py-4 items-center">
          <div className="font-bold text-2xl">LH.</div>
          <ul className="flex items-center gap-4">
            <li className="hover:border-b-4 hover:border-sky-600 transition-all duration-200">
              <a href="" className="text-lg hover:text-sky-600 ">
                Inicio
              </a>
            </li>
            <li className="hover:border-b-4 hover:border-sky-600 transition-all duration-200">
              <a href="" className="text-lg hover:text-sky-600 ">
                Proyectos
              </a>
            </li>
            <li className="hover:border-b-4 hover:border-sky-600 transition-all duration-200">
              <a href="" className="text-lg hover:text-sky-600 ">
                Skills
              </a>
            </li>
            <li className="hover:border-b-4 hover:border-sky-600 transition-all duration-200">
              <a href="" className="text-lg hover:text-sky-600 ">
                Contacto
              </a>
            </li>
          </ul>
          <div>
            <a href="https://github.com/leonelhv" target="_blank">
              <div className="rounded-full p-1">
                <UseAnimations animation={github} size={30} strokeColor="#fff" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
