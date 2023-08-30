interface DetailArrayFieldProps {
	label: string
	array: string[]
}

const DetailArrayField = ({ label, array }: DetailArrayFieldProps) => {
	return (
		<div className="flex flex-row items-center space-x-2">
			<span className="block text-gray-500 dark:text-gray-400">{label}:</span>
			{array.length > 0 &&
				array.map((item: string, index) => (
					<span
						key={index}
						className="block rounded-full border bg-primary px-4 py-1 text-white dark:bg-primaryDark dark:text-gray-600"
					>
						{item}
					</span>
				))}
		</div>
	)
}

export default DetailArrayField
