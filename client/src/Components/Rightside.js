import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import LoginIcon from "@material-ui/icons/AccountCircle";
import { useFormik } from "formik";
import * as yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { date, object } from "yup";

import axios from "axios";
import { boolean } from "yup/lib/locale";

// validation using YUP
var today = new Date();
console.log(today);
const formValidation = yup.object({
  first: yup
    .string()
    .max(30, "Should be MAX 30 chars long")
    .required("Apka first name kya hai "),
  last: yup
    .string()
    .required("Apka last name kya hai ")
    .max(30, "Should be MAX 30 chars long"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Bhai email dedo please"),
  date: yup.date().max(today, "Invalid DOB").required("DOB bhul gye bhai !"),
});

export const Rightside = (props) => {
  const [text, setText] = useState("");

  function validateTextArea() {
    if (text.length < 50) {
      alert("The description is too short, MIN 50 chars");
      return false;
    } else if (text.length > 600) {
      alert("The description is too long ,MAX 50 chars ");
      return false;
    }
    return true;
  }

  // formSubmit
  const formSubmit = (userRes, props, textcheck) => {
    const { first, last, email, date } = userRes;
    console.log(text, "chutiya");
    if (first && last && email && date && text && textcheck) {
      console.log(text, "chutiya");
      axios
        .post("/submitForm", {
          first,
          last,
          email,
          date,
          text,
        })
        .then((res) => {
          props.displayCallback(res.data);
        });
      setText("");
    } else {
      alert("Invalid Input");
      setText("");
    }
  };

  const formik = useFormik({
    initialValues: {
      first: "",
      last: "",
      email: "",
      date: "",
    },
    onSubmit: (values, { resetForm }, text) => {
      resetForm({ values: "" });
      var textcheck = validateTextArea();
      formSubmit(values, props, textcheck);
    },
    validationSchema: formValidation,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>How are you feeling ? </h2>
        <div className="textfield-container">
          <LoginIcon
            color="primary"
            fontSize="large"
            style={{ marginRight: 10, fontSize: 40, marginTop: 10 }}
          />
          <TextField
            name="first"
            variant="outlined"
            label="First Name"
            style={{ marginRight: 30 }}
            value={formik.values.first}
            onChange={formik.handleChange}
            error={formik.touched.first && Boolean(formik.errors.first)}
            helperText={formik.touched.first && formik.errors.first}
          ></TextField>
          <TextField
            name="last"
            variant="outlined"
            label="Last Name"
            value={formik.values.last}
            onChange={formik.handleChange}
            error={formik.touched.last && Boolean(formik.errors.last)}
            helperText={formik.touched.last && formik.errors.last}
          ></TextField>
        </div>
        <div className="email-container">
          <Icon
            color="primary"
            style={{ fontSize: 42, marginTop: 20, marginRight: 10 }}
          >
            email
          </Icon>
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
            style={{ marginRight: 30, marginTop: 15, width: 350 }}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="date-container">
          <Icon
            color="primary"
            style={{ fontSize: 42, marginTop: 20, marginRight: 10 }}
          >
            cake
          </Icon>
          <TextField
            name="date"
            type="date"
            label="Date of Birth"
            variant="outlined"
            value={formik.values.date}
            onChange={formik.handleChange}
            style={{ marginTop: 15 }}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="outerApp">
          <Icon color="primary" style={{ fontSize: 40, marginRight: 10 }}>
            description
          </Icon>

          <div className="editor">
            <CKEditor
              name="desc"
              editor={ClassicEditor}
              data={text}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            />
            <p>{text}</p>
          </div>
        </div>
        <Button
          style={{ width: 150, marginLeft: 230 }}
          endIcon={<Icon>arrow_forward</Icon>}
          color="secondary"
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
