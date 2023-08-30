export default interface Job {
	id: string
	name: string
	offerStartDate: string
	offerEndDate: string
	active: boolean
	company: string
	ratePerHour: number
	tools: string[]
	disciplines: string[]
	jobDescription: string
	jobType: string
	location: string
}
