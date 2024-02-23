export const Header = () => {
  return (
    <header className="py-2">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold capitalize">sneakers</h1>
        <nav>
          <ul className="flex items-center gap-2">
            <li>About</li>
            <li>Contact</li>
            <li>
              <button>use template</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
