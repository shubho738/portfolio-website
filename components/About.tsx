
import {ABOUT, TECH_STACK} from '@/config/profile'
import StyledHeading from './ui/StyledHeading'
import TextCard from './ui/TextCard'

const About = () => {

  return (
    <section
      id="about"
      className="pt-8 pb-24"
    >
      <div className="container">
        <div
          className="space-y-16"
        >
          <StyledHeading
            text="About Me"
            level={2}
            size="text-5xl"
          />
            
          <div
            className="max-w-3xl mdplus:max-w-full grid mdplus:grid-cols-2 items-start gap-y-12 gap-x-8 gap-y-16"
          >
            <p
              className="text-md text-[1.16rem] leading-[1.85rem]"
            >
              {ABOUT}
            </p>

            <div
              className="flex items-start flex-wrap gap-y-4 gap-x-2"
            >
              {TECH_STACK?.map(tech => (
                <TextCard
                  key={tech.id}
                  customStyles="transition-standard | hover:translate-x-1"
                >
                  {tech.tech}
                </TextCard>
                ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About