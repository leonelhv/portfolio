import { imgUrl } from "../helpers/urlImage"
import UseAnimations from "react-useanimations"
import github from "react-useanimations/lib/github"
import visibility from "react-useanimations/lib/visibility"

function Project({ project }) {
  const pathImage = imgUrl({ image: project.image, nameCarpet: "project" })
  return (
    <div className="relative rounded-lg overflow-hidden h-72 group">
      <img src={pathImage} alt="" className=" w-full h-full object-cover" />
      <div className="absolute top-0 left-0  flex-col justify-between h-full py-4  bg-black/60 w-full backdrop-blur-sm opacity-0 flex group-hover:opacity-100 transition-all duration-500">
        <div className="flex justify-center items-center gap-8 mt-12">
          <a href={project.github} target="_blank" className="rounded-full border p-1 hover:bg-sky-600">
            {" "}
            <UseAnimations animation={github} size={50} strokeColor="#fff" />
          </a>
          <a href={project.web} target="_blank" className="rounded-full border p-1 hover:bg-sky-600">
            {" "}
            <UseAnimations animation={visibility} size={50} strokeColor="#fff" />
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold  text-3xl bg-sky-600 pb-1  pl-2">{project.name}</h3>
          <p className="text-xl font-semibold text-slate-300 pl-2">{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Project
