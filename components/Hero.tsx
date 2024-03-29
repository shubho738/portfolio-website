
import Link from 'next/link'
import {Github, Linkedin, Mail} from 'lucide-react'

import {CONTACT_INFO} from '@/config/profile'
import Button from './ui/Button'
import LinkIcon from './ui/LinkIcon'

const Hero = () => {

  return (
    <section
      className="min-h-[95vh] flex items-center"
    >
      <div className="container">
        <div>
          <h1
            className="text-4xl sm:text-5xl leading-tight"
          >
            Hi, I'm Shubhankar <br /> Chakraborty
          </h1>

          <h2
            className="mt-12 mb-6 text-2xl"
          >
            Front End Web Developer
          </h2>

          <Link
            href="#projects"
          >
            <Button
              label="Projects"
            />
          </Link>


          <div
            className="mt-8 flex gap-8"
          >
            <LinkIcon
              icon={Github}
              size={30}
              href={CONTACT_INFO.GITHUB}
              newTab
            />

            <LinkIcon
              icon={Linkedin}
              size={30}
              href={CONTACT_INFO.LINKEDIN}
              newTab
            />

            <LinkIcon
              icon={Mail}
              size={30}
              href={`mailto:${CONTACT_INFO.EMAIL}`}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero