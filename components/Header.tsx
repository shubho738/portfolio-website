
'use client'

import {useState} from 'react'
import {Menu, X} from 'lucide-react'

import {headerNav} from '@/config/site'
import Logo from './ui/Logo'
import StyledLink from './ui/StyledLink'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const onToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const navLinks = (
    headerNav.map(item => (
      <li
        key={item.id}
        onClick={() => setShowMenu(false)}
      >
        <StyledLink
          href={item.href}
          label={item.label} 
        />
      </li>
      ))
    )

	return (
		<header
      className="py-8 fixed top-0 left-0 right-0 z-10 bg-background"
    >
      <div className="container">
        <div
          className="flex justify-between items-center"
        >
          <Logo />

          <div
            className="hidden sm:block"
          >
            <ul
              className="flex gap-8"
            >
              {navLinks}
            </ul>
          </div>

          <div
            className="sm:hidden"
          >
            {!showMenu && (
              <div
                onClick={onToggleMenu}
              >
                <Menu
                  className="cursor-pointer" 
                />
              </div>
              )}

            {showMenu && (
              <div
                className="p-8 bg-neutral-light text-black fixed left-0 right-[20%] top-0 bottom-0 z-20 space-y-12"
              >
                <div
                  onClick={onToggleMenu}
                >
                  <X
                    color="hsl(var(--clr-neutral-dark))" 
                    className="cursor-pointer"
                  />
                </div>
                
                <ul
                  className="space-y-10"
                >
                  {navLinks}
                </ul>
              </div>
              )}
          </div>

        </div>
      </div>
		</header>
	)
}

export default Header