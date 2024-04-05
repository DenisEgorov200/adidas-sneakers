const FOOTER_MOCK: Links[] = [
  {
    id: 0,
    title: 'about',
    children: [
      { id: 0, value: 'who we are' },
      { id: 1, value: 'jobs' },
      { id: 2, value: 'contact' },
    ],
  },
  {
    id: 1,
    title: 'help',
    children: [
      { id: 0, value: 'FAQ' },
      { id: 1, value: 'delivery' },
      { id: 2, value: 'returns' },
    ],
  },
  {
    id: 2,
    title: 'legal',
    children: [
      { id: 0, value: 'claim' },
      { id: 1, value: 'privacy' },
      { id: 2, value: 'terms' },
    ],
  },
  {
    id: 3,
    title: 'socials',
    children: [
      { id: 0, value: 'twitter' },
      { id: 1, value: 'instagram' },
      { id: 2, value: 'TikTok' },
    ],
  },
]

interface Links {
  id: number
  title: string
  children: Link[]
}

interface Link {
  id: number
  value: string
}

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-12 px-8 max-lg:flex-col max-lg:gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold max-lg:text-center">Sneakers</h2>
          <p className="text-secondary">
            Made this &#128076; by{' '}
            <a href="https://github.com/DenisEgorov200" className="text-white underline">
              Denis
            </a>
          </p>
        </div>
        <div className="flex items-center gap-16 max-sm:w-full max-sm:flex-col max-sm:gap-2">
          {FOOTER_MOCK.map((links) => (
            <div key={links.id} className="max-sm:w-full max-sm:text-center">
              <h3 className="text-lg font-bold uppercase mb-4">{links.title}</h3>
              <ul className="flex flex-col gap-2">
                {links.children.map((link) => (
                  <li key={link.id} className="text-secondary capitalize">
                    <a href="#">{link.value}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
