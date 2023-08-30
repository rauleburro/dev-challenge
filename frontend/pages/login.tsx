import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage, FormikErrors, FormikValues } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { use, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import * as AuthSlice from "@/store/authSlice";
import Button from "@/components/Button";
import CustomField from "@/components/CustomField";
import { LOGIN } from "@/graphql/graphql";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const router = useRouter();
  const dispatch = useDispatch();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (data) {
      dispatch(AuthSlice.login(data.login));
      router.push("/jobs");
    }
  }, [data, dispatch, router]);

  const handleSubmit = (values: LoginFormValues, { setSubmitting }: FormikValues) => {
    login({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
    setSubmitting(false);
  };

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
                Sign in to your account
              </h2>
              <Formik
                initialValues={initialValues}
                validate={(values: LoginFormValues) => {
                  const errors: FormikErrors<LoginFormValues> = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.password) {
                    errors.password = "Required";
                  }
                  return errors;
                }}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-8">
                    <CustomField label="Email" name="email" type="email" />
                    <CustomField
                      label="Password"
                      name="password"
                      type="password"
                    />
                    <Button
                      type="submit"
                      text="Sign in"
                      disabled={isSubmitting}
                    />
                    <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                      {`Don't have an account`} ? &nbsp;
                      <Link href="/register" className="text-primary">
                        Sign up
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

export default Login;
