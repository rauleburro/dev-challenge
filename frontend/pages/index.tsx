import Header from '@/components/Header'
import IndexSearch from '@/components/IndexSearch'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Header />
			<div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
				<div
					aria-hidden="true"
					className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
				></div>
				<div className="relative lg:flex lg:items-center lg:gap-12">
					<div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
						<h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
							Great games start with great <span className="text-primary dark:text-primaryLight">people.</span>
						</h1>
						<p className="mt-8 text-gray-600 dark:text-gray-300">
							The future of video games is bright, and you can be a part of it. Start your journey today and find your
							next opportunity to grow.
						</p>
						<IndexSearch />
					</div>
					<div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
						<Image src="images/project.svg" alt="project illustration" width={500} height={500} />
					</div>
				</div>
			</div>
		</>
	)
}
