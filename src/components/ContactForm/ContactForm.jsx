import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "../ContactForm/ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 15 letters!")
    .required("This field is required!"),
  number: Yup.string()
    .length(7, "Number must be exactly 7 characters long")
    .matches(/^\d+$/, "Number must contain only digits")
    .required("This field is required!"),
});

export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        id: Date.now(),
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label>Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
