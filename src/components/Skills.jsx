import { skills } from "../consts/skills"
import { imgUrl } from "../helpers/urlImage"

function Skills() {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-24">Skills</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-8 items-center justify-center">
        {skills.map((skill) => {
          return (
            <div key={skill.path} className="flex flex-col justify-between items-center hover:scale-110">
              <img src={imgUrl({ image: skill.path, nameCarpet: "icons" })} alt="" className="w-22 h-22" />
              <h2>{skill.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
