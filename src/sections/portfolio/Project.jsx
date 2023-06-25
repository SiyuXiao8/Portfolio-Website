import IndividualProject from "./IndividualProject"

const Project = ({projects}) => {
  return (
    <div className="portfolio__projects" data-aos='fade-in'>
        {
            projects.map(project => (
                <IndividualProject key={project.id} project={project}/>
            ))
        }
    </div>
  )
}

export default Project