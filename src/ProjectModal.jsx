import "./styles/ProjectModal.css"

const ProjectModal = props => {
  const { data, onClose } = props
  return <div id="project-modal">
    <img src="assets/close_modal.png" id="close-modal" alt="Close Modal" onClick={onClose}/>
    <h2>{data.title}</h2>
    <p><a href={data.link} target="_blank">Click here to see this project</a></p>
    <p>{data.description}</p>
  </div>
}

export default ProjectModal