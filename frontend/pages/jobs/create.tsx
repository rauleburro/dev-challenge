import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";
import Dashboard from "../dashboard";
import Link from "next/link";
import Button from "@/components/Button";
import CustomField from "@/components/CustomField";
import { gql, useMutation } from "@apollo/client";
import { use, useEffect } from "react";
import { useRouter } from "next/router";

enum JobType {
  Remote = "Remote",
  Onsite = "Onsite",
  Hybrid = "Hybrid",
}

interface CreeateJobFormValues {
  name: string;
  offerStartDate: Date;
  offerEndDate: Date;
  active: boolean;
  company: string;
  ratePerHour: number;
  tools: string[];
  disciplines: string[];
  jobDescription: string;
  jobType: JobType;
  location: string;
}

const CREATE_JOB = gql`
  mutation CreateJob(
    $name: String!
    $offerStartDate: String!
    $offerEndDate: String!
    $active: Boolean!
    $company: String!
    $ratePerHour: Float!
    $tools: [String!]!
    $disciplines: [String!]!
    $jobDescription: String!
    $jobType: String!
    $location: String!
  ) {
    createJob(
      name: $name
      offerStartDate: $offerStartDate
      offerEndDate: $offerEndDate
      active: $active
      company: $company
      ratePerHour: $ratePerHour
      tools: $tools
      disciplines: $disciplines
      jobDescription: $jobDescription
      jobType: $jobType
      location: $location
    ) {
      id
    }
  }
`;

const CreateJob = () => {
  const router = useRouter();
  const [createJob, { data, loading, error }] = useMutation(CREATE_JOB);

  const initialValues: CreeateJobFormValues = {
    name: "",
    offerStartDate: new Date(),
    offerEndDate: new Date(),
    active: true,
    company: "",
    ratePerHour: 0,
    tools: [],
    disciplines: [],
    jobDescription: "",
    jobType: JobType.Remote,
    location: "",
  };

  useEffect(() => {
    if (data) {
      router.push("/jobs");
    }
  }, [data, router]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <Dashboard>
      <>
        <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
          <div className="p-8 py-12 sm:p-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
              Post a job
            </h2>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
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
                });
              }}
              validate={(values: CreeateJobFormValues) => {
                const errors: FormikErrors<CreeateJobFormValues> = {};
                if (!values.name) {
                  errors.name = "Required";
                }
                return errors;
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-8">
                  <CustomField label="Name" name="name" type="text" />
                  <CustomField label="Company" name="company" type="text" />
                  <CustomField label="Location" name="location" type="text" />
                  <CustomField
                    label="Rate per hour"
                    name="ratePerHour"
                    type="number"
                  />
                  <CustomField
                    label="Job description"
                    name="jobDescription"
                    type="text"
                  />
                  <Button
                    type="submit"
                    text="Create job"
                    disabled={isSubmitting}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </>
    </Dashboard>
  );
};

export default CreateJob;
