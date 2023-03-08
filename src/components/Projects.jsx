import { projects } from "../consts/projects"
import Project from "./Project"

function Projects() {
  return (
    <>
      <h2 className="text-4xl font-semibold text-center my-24">Proyectos</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 ">
        {projects.map((project) => {
          return <Project project={project} key={project.id} />
        })}
      </div>
    </>
  )
}

export default Projects
