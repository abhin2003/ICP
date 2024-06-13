import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const AddMemberSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name should only contain letters")
    .required('Name is required'),
  age: Yup.number()
    .min(1, 'Age must be at least 1')
    .max(100, 'Age must be at most 100')
    .required('Age is required')
    .integer("Age must be an integer")
});

function AddMember({ handleAddMember }) {
  return (
    <div>
      <h2>Add Member</h2>
      <Formik
        initialValues={{ name: '', age: '' }}
        validationSchema={AddMemberSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleAddMember(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <Field type="number" name="age" />
              <ErrorMessage name="age" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Add Member
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddMember;
