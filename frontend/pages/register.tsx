import Button from "@/components/Button";
import CustomField from "@/components/CustomField";
import CustomSelectField from "@/components/CustomSelectField";
import { login } from "@/store/authSlice";
import { gql, useMutation } from "@apollo/client";
import { Field, Form, Formik, FormikErrors } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

enum Role {
  Talent = "Talent",
  Recruiter = "Recruiter",
}

const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    createUser(name: $name, email: $email, password: $password, role: $role) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;

interface CreateUserFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Role;
}

const Register = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const router = useRouter();
  const dispatch = useDispatch();

  const initialValues: CreateUserFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: Role.Talent,
  };

  useEffect(() => {
    if (data) {
      dispatch(login(data.createUser));
      router.push("/jobs");
    }
  }, [data, dispatch, router]);

  return (
    <div className="relative py-16">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="w-full flex justify-between lg:w-auto my-5">
            <Link
              href="/"
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <div aria-hidden="true" className="flex space-x-1">
                <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
                <div className="h-6 w-2 bg-primary dark:bg-primaryLight"></div>
              </div>
              <span className="text-base font-bold text-gray-600 dark:text-white">
                Jobify
              </span>
            </Link>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
            <div className="p-8 py-12 sm:p-16">
              <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                Sign up
              </h2>
              <Formik
                initialValues={initialValues}
                validate={(values: CreateUserFormValues) => {
                  const errors: FormikErrors<CreateUserFormValues> = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.name) {
                    errors.name = "Required";
                  }
                  if (!values.password) {
                    errors.password = "Required";
                  }
                  if (!values.confirmPassword) {
                    errors.confirmPassword = "Required";
                  }
                  if (values.password !== values.confirmPassword) {
                    errors.confirmPassword = "Passwords do not match";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  createUser({
                    variables: {
                      name: values.name,
                      email: values.email,
                      password: values.password,
                      role: values.role,
                    },
                  });
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-8">
                    <CustomField label="Name" name="name" type="text" />
                    <CustomField label="Email" name="email" type="email" />
                    <CustomSelectField
                      label="Role"
                      name="role"
                      options={Object.values(Role)}
                    />
                    <CustomField
                      label="Password"
                      name="password"
                      type="password"
                    />
                    <CustomField
                      label="Confirm password"
                      name="confirmPassword"
                      type="password"
                    />

                    <Button
                      type="submit"
                      text="Sign up"
                      disabled={isSubmitting}
                    />

                    <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                      Already have an account ? &nbsp;
                      <Link href="/login" className="text-primary">
                        Sign in
                      </Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="space-x-4 text-center text-gray-500">
            <a href="#" className="text-sm hover:text-primary">
              Contact
            </a>
            <a href="#" className="text-sm hover:text-primary">
              Privacy & Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
