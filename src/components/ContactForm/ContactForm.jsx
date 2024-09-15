import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
// import css from "./ContactForm.module.css";
import * as Yup from "yup";

const initialValues = { username: "", usernumber: "" };

export default function ContactForm() {
  const dispatch = useDispatch();

  const inputSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    usernumber: Yup.string()
      .matches(/^[\d-]+$/, "Must be a number")
      .min(9, "Too short")
      .max(12, "Too long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.usernumber,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={inputSchema}
    >
      <Form>
        <label htmlFor="username">Name</label>
        <Field type="text" name="username" id="username" />
        <ErrorMessage name="username" component="span" />

        <label htmlFor="usernumber">Number</label>
        <Field type="text" name="usernumber" id="usernumber" />
        <ErrorMessage name="usernumber" component="span" />

        <button type="submit ">Add contact</button>
      </Form>
    </Formik>
  );
}
