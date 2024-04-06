import { Button } from '@shared/ui/button'
import { HamburgerMenu } from '@shared/ui/hamburger-menu'
import clsx from 'clsx'
import { useState } from 'react'

const navLinks = ['About', 'Contact']

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <header className="fixed z-10 top-0 w-full bg-gray-200 py-6">
      <div className="relative container mx-auto flex items-center justify-between max-sm:flex-col max-sm:px-2">
        <a href="#" className="text-4xl font-bold capitalize">
          sneakers
        </a>
        <div className="absolute right-0 sm:hidden">
          <HamburgerMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        </div>
        <nav>
          <ul
            className={clsx(
              'w-full flex items-center justify-center gap-6',
              isOpenMenu
                ? 'max-sm:absolute max-sm:left-0 max-sm:top-[64px] max-sm:flex max-sm:flex-col max-sm:bg-gray-200'
                : 'max-sm:hidden',
            )}>
            <>
              {navLinks.map((link) => (
                <li key={link} className="text-secondary">
                  <a href="#">{link}</a>
                </li>
              ))}
              <li>
                <Button>use template</Button>
              </li>
            </>
          </ul>
        </nav>
      </div>
    </header>
  )
}
