import Link from 'next/link'

interface AsideMenuItemProps {
	label: string
	href: string
	selected: boolean
}

const AsideMenuItem = ({ label, href, selected }: AsideMenuItemProps) => {
	const selectedStyle = 'bg-primary text-white'
	return (
		<li>
			<Link href={href}>
				<div
					aria-label="dashboard"
					className={`relative flex items-center space-x-4 rounded-full px-4 py-3 ${
						selected ? selectedStyle : ''
					}  hover:bg-primary hover:text-white dark:text-white`}
				>
					<svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
						<path
							d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
							className="dark:fill-slate-600 fill-current text-cyan-400"
						></path>
						<path
							d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
							className="fill-current text-cyan-200 group-hover:text-cyan-300"
						></path>
						<path
							d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
							className="fill-current group-hover:text-sky-300"
						></path>
					</svg>
					<span className="-mr-1 font-medium">{label}</span>
				</div>
			</Link>
		</li>
	)
}

export default AsideMenuItem
