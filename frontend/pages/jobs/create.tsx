import { ErrorMessage, Field, FieldArray, Form, Formik, FormikErrors, FormikValues } from 'formik'
import Dashboard from '../../components/Dashboard'
import Link from 'next/link'
import Button from '@/components/Button'
import CustomField from '@/components/CustomField'
import { useMutation } from '@apollo/client'
import { use, useEffect } from 'react'
import { useRouter } from 'next/router'
import CustomArrayField from '@/components/CustomArrayField'
import CustomSelectField from '@/components/CustomSelectField'
import { CREATE_JOB } from '@/graphql/graphql'
import * as Yup from 'yup'

enum JobType {
	Remote = 'Remote',
	Onsite = 'Onsite',
	Hybrid = 'Hybrid',
}

interface CreeateJobFormValues {
	name: string
	offerStartDate: Date
	offerEndDate: Date
	active: boolean
	company: string
	ratePerHour: number
	tools: string[]
	disciplines: string[]
	jobDescription: string
	jobType: JobType
	location: string
}

const CreateJob = () => {
	const router = useRouter()
	const [createJob, { data, loading, error }] = useMutation(CREATE_JOB)

	const initialValues: CreeateJobFormValues = {
		name: '',
		offerStartDate: new Date(),
		offerEndDate: new Date(),
		active: true,
		company: '',
		ratePerHour: 0,
		tools: [],
		disciplines: [],
		jobDescription: '',
		jobType: JobType.Remote,
		location: '',
	}

	const validateSchema = Yup.object({
		name: Yup.string().required('Required'),
		offerStartDate: Yup.date(),
		offerEndDate: Yup.date(),
		company: Yup.string().required('Required'),
		ratePerHour: Yup.number(),
		tools: Yup.array().of(Yup.string()),
		disciplines: Yup.array().of(Yup.string()),
		jobDescription: Yup.string(),
		jobType: Yup.string(),
		location: Yup.string().required('Required'),
	})

	useEffect(() => {
		if (data) {
			router.push('/jobs')
		}
	}, [data, router])

	useEffect(() => {
		if (error) {
			console.log(error)
		}
	}, [error])

	const handleSubmit = (values: CreeateJobFormValues, { setSubmitting }: FormikValues) => {
		createJob({
			variables: {
				name: values.name,
				offerStartDate: values.offerStartDate,
				offerEndDate: values.offerEndDate,
				active: values.active,
				company: values.company,
				ratePerHour: values.ratePerHour,
				tools: values.tools,
				disciplines: values.disciplines,
				jobDescription: values.jobDescription,
				jobType: values.jobType,
				location: values.location,
			},
		})
		setSubmitting(false)
	}

	return (
		<Dashboard>
			<>
				<div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl dark:border-gray-700 dark:bg-gray-800">
					<div className="p-8 py-12 sm:p-16">
						<h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">Post a job</h2>
						<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validateSchema}>
							{({ isSubmitting, values }) => (
								<Form className="space-y-8">
									<CustomField label="Name" name="name" type="text" />
									<CustomField label="Offer start date" name="offerStartDate" type="date" />
									<CustomField label="Offer end date" name="offerEndDate" type="date" />
									<CustomField label="Company" name="company" type="text" />
									<CustomField label="Rate per hour" name="ratePerHour" type="number" />
									<CustomArrayField label="Tools" name="tools" type="text" values={values} />

									<CustomArrayField label="Disciplines" name="disciplines" type="text" values={values} />

									<CustomField label="Job description" name="jobDescription" type="text" />
									<CustomSelectField label="Job type" name="jobType" options={Object.keys(JobType) as Array<string>} />
									<CustomField label="Location" name="location" type="text" />

									<Button type="submit" text="Create job" disabled={isSubmitting} />
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</>
		</Dashboard>
	)
}

export default CreateJob
