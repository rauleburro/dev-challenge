import { on } from 'events'

interface SearchProps {
	search: (e: React.ChangeEvent<HTMLInputElement>) => void
	initial: string | string[]
}

const Search = ({ search, initial }: SearchProps) => {
	return (
		<>
			<div className="flex flex-1 items-center text-gray-400 focus-within:text-cyan-400 m-5 rounded-xl border border-gray-300 focus-within:border-cyan-300">
				<span className="left-8 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700 focus-within:border-cyan-300">
					<svg xmlns="http://ww50w3.org/2000/svg" className="ml-4 w-4 fill-current" viewBox="0 0 35.997 36.004">
						<path
							id="Icon_awesome-search"
							data-name="search"
							d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
						></path>
					</svg>
				</span>
				<input
					onChange={search}
					type="search"
					name="leadingIcon"
					id="leadingIcon"
					placeholder="Search here"
					value={initial}
					className="outline-none w-full  py-2.5 pl-4 pr-4 text-sm text-gray-600 transition rounded-xl dark:bg-gray-900 dark:border-gray-700"
				/>
			</div>
		</>
	)
}

export default Search
