import { FC } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm: FC = () => {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  interface Users {
    id: number;
    username: string;
    email: string;
    password: string;
  }
  const handleSubmit = async (
    values: Users,
    formikHelpers: FormikHelpers<Users>
  ) => {
    const { status } = await axios.post("http://localhost:3000/users", values);
    if (status !== 201) {
      console.error("Failed to add product");
      return;
    }
    console.log(values);
    formikHelpers.resetForm();
    alert("User added successfully");
    navigate("/");
  };
  return (
    <div className="flex justify-center py-20">
      <Formik
        initialValues={{ id: 0, username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col bg-sky-300 w-[320px] py-5">
            <div className="text-3xl py-2 px-5">Registration</div>
            <div className="py-2 px-5 flex flex-col gap-2 items-start">
              <label htmlFor="username">Username</label>
              <Field className="border border-black w-full" name="username" />
              {errors.username && touched.username ? (
                <div className="text-red-400">{errors.username}</div>
              ) : null}
            </div>
            <div className="py-2 px-5 flex flex-col gap-2 items-start">
              <label htmlFor="email">Email</label>
              <Field className="border border-black w-full" name="email" />
              {errors.email && touched.email ? (
                <div className="text-red-400">{errors.email}</div>
              ) : null}
            </div>
            <div className="py-2 px-5 flex flex-col gap-2 items-start">
              <label htmlFor="password">Password</label>
              <Field
                className="border border-black w-full"
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div className="text-red-400">{errors.password}</div>
              ) : null}
            </div>
            <div className="py-5 px-5 flex flex-col gap-2 items-start">
              <button type="submit" className="border bg-white w-full">
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default RegistrationForm;
