interface Props {
  isOpenMenu: boolean
  setIsOpenMenu: (value: boolean) => void
}

export const HamburgerMenu = ({ isOpenMenu, setIsOpenMenu }: Props) => {
  return (
    <button
      className="navbar-burger flex items-center text-third cursor-pointer p-3"
      onClick={() => setIsOpenMenu(!isOpenMenu)}>
      <svg
        className="block h-4 w-4 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <title>Mobile menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  )
}
