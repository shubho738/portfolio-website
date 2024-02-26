
import {Github, Linkedin, Mail} from 'lucide-react'

import LinkIcon from './ui/LinkIcon'

const Footer = () => {

  return (
    <footer
      className="pt-8 pb-16"
    >
      <div className="container">
        <div
          className="flex flex-col sm:flex-row justify-between gap-y-8"
        >
          <div
            className="space-y-4"
          >
            <h2
              className="text-xl"
            >
              Shubhankar
            </h2>
            <span
              className="text-xs"
            >
              Made by Shubhankar Chakraborty
            </span>
          </div>

          <div
            className="space-y-4"
          >
            <span
              className="text-xl"
            >
              Find Me
            </span>
            <div
              className="space-x-4"
            >
              <LinkIcon
                icon={Github}
                href="http://github.com"
                newTab
              />

              <LinkIcon
                icon={Linkedin}
                href="http://linkedin.com"
                newTab
              />

              <LinkIcon
                icon={Mail}
                href="mailto:contact@testmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer