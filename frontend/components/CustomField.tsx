import { ErrorMessage, Field } from 'formik'

interface CustomFieldProps {
	label?: string
	name: string
	type: string
	className?: string
}

const CustomField = ({ label, name, type, className }: CustomFieldProps) => {
	return (
		<div className="space-y-2">
			{label && (
				<label htmlFor={name} className="text-gray-600 dark:text-gray-300">
					{label}
				</label>
			)}
			<Field
				type={type}
				name={name}
				id={name}
				className={`focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 dark:text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300 ${className}`}
			/>
			<ErrorMessage name={name} component={'div'} />
		</div>
	)
}

export default CustomField
