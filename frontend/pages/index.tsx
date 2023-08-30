import Header from '@/components/Header'
import IndexSearch from '@/components/IndexSearch'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Header />
			<div className="m-auto px-6 pt-32 xl:container md:px-12 md:py-12">
				<div
					aria-hidden="true"
					className="absolute inset-0 my-auto h-32 w-96 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight opacity-50 blur-3xl dark:opacity-20"
				></div>
				<div className="relative lg:flex lg:items-center lg:gap-12">
					<div className="text-center sm:mx-auto sm:w-10/12 md:mt-12 md:w-2/3 lg:mr-auto lg:mt-0 lg:w-6/12 lg:text-left">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl lg:text-5xl xl:text-6xl">
							Great games start with great <span className="text-primary dark:text-primaryLight">people.</span>
						</h1>
						<p className="mt-8 text-gray-600 dark:text-gray-300">
							The future of video games is bright, and you can be a part of it. Start your journey today and find your
							next opportunity to grow.
						</p>
						<IndexSearch />
					</div>
					<div className="w-full overflow-hidden lg:-mr-16 lg:w-7/12">
						<Image src="images/project.svg" alt="project illustration" width={500} height={500} />
					</div>
				</div>
			</div>
		</>
	)
}
