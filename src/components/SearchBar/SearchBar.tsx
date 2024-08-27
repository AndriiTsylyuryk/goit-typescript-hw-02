import { Formik, Field, Form, FormikHelpers } from "formik";
import React from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  setQuery: (query: string) => void;
}

interface SearchFormValues {
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const handleSubmit = (values: SearchFormValues) => {
    if (values.query) {
      setQuery(values.query);
    } else {
      toast.error("This didn't work.");
    }
  };
  const initialValues = {
    query: "",
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
