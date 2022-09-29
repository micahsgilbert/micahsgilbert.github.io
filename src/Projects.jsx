import { useState } from "react"
import "./styles/Projects.css"
import ProjectModal from "./ProjectModal"

const Projects = props => {
  let [modalOpen, setModalOpen] = useState(false)
  let [projectData, setProjectData] = useState({})

  const openProject = (data, event) => {
    if (data.description) {
      event.preventDefault()
      setModalOpen(true)
      setProjectData(data)
    }
  }

  return (
  <div id="projects-container">
    {props.data.map(category => (
      <div key={category.title}>
        <h2>{category.title}</h2>
        <hr />
        {category.content.map(entry => (
          <a href={entry.link} target="_blank" onClick={e => openProject(entry, e)} key={entry.title}>{entry.title}</a>
        ))}
      </div>
    ))}
  {modalOpen && <ProjectModal data={projectData} onClose={() => {setModalOpen(false)}}/>}
  </div>)
}

export default Projects