import Card from "../../compoents/Card"

const IndividualProject = ({project}) => {
  return (
    <Card className='portfolio__project'>
        <div className="portfolio__project-image">
            <img src={project.image} alt="portfolio project look" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            {project.demo && <a href={project.demo} className="btn sm left" target="_blank" rel="noopener noreferrer">Demo</a>}
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
    </Card>
  )
}

export default IndividualProject