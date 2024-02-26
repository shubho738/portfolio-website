
import {projects} from '@/config/profile'
import StyledHeading from './ui/StyledHeading'
import Project from './Project'

const Projects = () => {

  return (
    <section
      id="projects"
      className="pt-8 pb-24"
    >
      <div className="container">
        <div
          className="space-y-16"
        >
          <StyledHeading
            text="Projects"
            level={2}
            size="text-5xl"
          />
            
          <div
            className="space-y-28"
          >
            {projects?.map(project => (
              <Project
                key={project.id}
                {...project}
              />
              ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Projects