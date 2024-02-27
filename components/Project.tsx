
import Link from 'next/link'
import Image from 'next/image'

import TextCard from './ui/TextCard'
import Button from './ui/Button'

interface ProjectProps {

  title: string;
  techstack: string[];
  image: string;
  overview: string;
  liveHref: string;
  githubHref: string
}

const Project = ({title, techstack, image, overview, liveHref, githubHref}: ProjectProps) => {

  return (
    <div
      className="max-w-[45rem] mdplus:max-w-full grid mdplus:grid-cols-2 gap-x-8 gap-y-12"
    >

      <div
        className="space-y-8"
      >
        <h3
          className="text-3xl"
        >
          {title}
        </h3>

        <div
          className="flex flex-wrap gap-y-4 gap-x-1"
        >
          {techstack?.map((tech, i) => (
            <TextCard
              key={`${tech} ${i}`}
              customStyles="transition-standard | hover:translate-x-1"
            >
              {tech}
            </TextCard>
            ))}
        </div>

        <div
          className="ml-2 flex flex-wrap gap-x-6 gap-y-6"
        >
          
          <Button 
            label="Live" 
            href={liveHref}
            newTab
          />
       
          <Button 
            label="Github" 
            href={githubHref}
            newTab
          />
          

        </div>

        <p
          className="whitespace-pre-wrap"
        >
          {overview}
        </p>

      </div>



      <div>
        <Link
          href={liveHref}
          target="_blank"
        >
          <div
            className="relative w-[100%] xl:w-[65%] max-w-[400px] aspect-[2/1.6]"
          >
            <Image
              fill
              src={image}
              alt="project image"
              className="transition-standard | object-cover object-top object-center rounded hover:shadow-xl hover:shadow-[hsl(var(--clr-accent))] hover:translate-y-1"
            />
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Project