import { FieldArray } from 'formik'
import CustomField from './CustomField'
import Button from './Button'
import { Key } from 'react'

interface CustomArrayFieldProps {
	label?: string
	name: string
	type: string
	className?: string
	arrayHelpers?: any
	values?: any
}

const CustomArrayField = ({ label, name, type, className, arrayHelpers, values }: CustomArrayFieldProps) => {
	return (
		<div className="space-y-2">
			<label className="text-gray-600 dark:text-gray-300">{label}</label>
			<FieldArray
				name={name}
				render={(arrayHelpers) => (
					<div>
						{values[name] && values[name].length > 0 ? (
							values[name].map((_name: any, index: any) => (
								<div key={index} className="mt-4 flex flex-row">
									<CustomField name={`${name}.${index}`} type="text" className="w-full" />

									<div className="mx-2">
										<Button
											type="button"
											onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
											disabled={false}
											text="-"
										/>
									</div>

									<Button
										type="button"
										onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
										text="+"
										disabled={false}
									/>
								</div>
							))
						) : (
							<Button onClick={() => arrayHelpers.push('')} text={`Add a ${name}`} type={'button'} disabled={false} />
						)}
					</div>
				)}
			/>
		</div>
	)
}

export default CustomArrayField
