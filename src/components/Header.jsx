
import { HeaderOption } from '@components/HeaderOption.jsx'
import { AboutIcon, ContactIcon, HomeIcon, CodeIcon, MenuIcon } from '@components/HeaderIcons.jsx'
import { useMenu } from '@hooks/useMenu.jsx'

export function Header() {
  const { isMenuOpen, setIsMenuOpen } = useMenu()

  return (
    <nav className={`flex flex-row justify-between items-center gap-x-4 py-4 px-3 w-[100%]
      xl:py-8
    `}>
      <div 
        className={`flex flex-row 
        items-center gap-x-3 z-10`
      }>
        <img src="/photos/briefcase.png" alt="portfolio icons"
         className="size-8 align-center
         sm:size-11
         " />
        <h1 
        className="text-3xl font-bold
        sm:text-4xl
        ">
          Monchi<span className="text-[var(--brand-color)]">Folio</span>
        </h1>
      </div>


      <div id="nav-links" 
        className={`absolute top-10 right-0 flex flex-col items-start justify-between
          font-bold
          ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-85 max-lg:pointer-events-none'} 
          transform transition-all duration-500
          text-xl 
          w-[100%] h-[450px]
          bg-[#040404]
          rounded-b-xl
          gap-2 pt-8 px-10 pb-8
          max-lg:shadow-md max-lg:shadow-black
          sm:text-3xl
          sm:top-16
          lg:opacity-100 lg:flex lg:flex-row
          lg:text-base lg:relative lg:top-0
          lg:h-[50px] lg:scale-100 lg:pt-0 lg:pb-0 
          lg:z-50 lg:px-2 lg:items-center lg:justify-end lg:w-[550px]
          xl:text-xl xl:w-[600px]
          `}>
        <HeaderOption href="/">
          <HomeIcon className="size-7 sm:size-9 lg:size-7" />
          <span className="px-4">
            Home
          </span>
        </HeaderOption>
        <HeaderOption href="/projects">
          <CodeIcon className="size-7 sm:size-9 lg:size-7" />
          <span className="px-4">
            Projects 
          </span>
        </HeaderOption>
        <HeaderOption href="/about">
          <AboutIcon className="size-7 sm:size-9 lg:size-7" />
          <span className="px-4">
            About 
          </span>
        </HeaderOption>
        <HeaderOption href="#contact">
          <ContactIcon className="size-7 sm:size-9 lg:size-7" />
          <span className="px-4">
            Contact
          </span>
        </HeaderOption>
      </div>

      <div className="z-20 lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="align-bottom border-[3px] border-transparent hover:border-white rounded-lg hover:bg-zinc-900 justify-self-end transition duration-100">
          <MenuIcon className="size-8 sm:size-11" />
        </button>
      </div>
    </nav>
  );
}
