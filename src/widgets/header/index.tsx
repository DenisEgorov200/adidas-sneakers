import { Button } from '@shared/ui/button'

const navLinks = ['About', 'Contact']

export const Header = () => {
  return (
    <header className="absolute z-10 top-0 w-full py-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold capitalize">sneakers</h1>
        <nav>
          <ul className="flex items-center gap-6">
            <>
              {navLinks.map((link) => (
                <li key={link} className="text-secondary">
                  {link}
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
