import { useMenu } from '@hooks/useMenu.jsx'

export function HeaderOption ({ children, href }) {
	const { isMenuOpen, setIsMenuOpen } = useMenu()
	return (
		<a href={href} 
			className="
			flex flex-row items-center text-start w-[100%] hover:bg-zinc-900/90 px-3 py-3 rounded
			lg:pr-1 lg:py-2 lg:w-[134px] lg:pl-3
			xl:w-[160px]
			" 
			onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {children}
    </a>
	)
}