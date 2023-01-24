
import { projects } from '../projects'
import { Project } from './Project'

export const Projects = ({portfolioRef}) => {

  return (
    <div className="projects" ref={portfolioRef}>
      <br />
      <br />
        <h2>ITINERARIO</h2>
        <hr />
        <Project
              project={'project'}
        />

    </div>
  )
}
