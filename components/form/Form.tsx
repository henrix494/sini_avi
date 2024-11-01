"use client";
import React from "react";
import { Formik } from "formik";
export default function Form() {
  return (
    <div className="mt-14 text-xl text-main-bg" dir="rtl">
      <Formik
        initialValues={{ name: "", lastName: "", phone: "" }}
        validate={(values) => {
          const errors: { name?: string; lastName?: string; phone?: string } =
            {};
          if (!values.name) {
            errors.name = "שם חובה";
          }
          if (!values.lastName) {
            errors.lastName = "שם משפחה חובה";
          }
          if (!values.phone) {
            errors.phone = "מספר חובה";
          }
          console.log(errors);
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex gap-10 max-lg:flex-col  ">
              <div className="flex flex-col  gap-2 ">
                <label
                  htmlFor="name"
                  className="whitespace-nowrap text-[white]"
                >
                  שם*
                </label>
                <div className="relative w-min">
                  <div
                    className={`tooltip   ${errors.name ? "opacity-1" : "opacity-0"} transition-all duration-500`}
                  >
                    <span className="tooltiptext">שם חובה</span>
                  </div>
                  <input
                    className={`w-[200px] h-[30px] border border-gray-300 rounded px-2  `}
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    id="name"
                    style={{ verticalAlign: "middle" }}
                  />
                </div>
              </div>
              <div className="flex flex-col  gap-2 ">
                <label
                  htmlFor="name"
                  className="whitespace-nowrap text-[white]"
                >
                  שם משפחה*
                </label>
                <div className="relative w-min">
                  <div
                    className={`tooltip   ${errors.lastName ? "opacity-1" : "opacity-0"} transition-all duration-500`}
                  >
                    <span
                      className="tooltiptext"
                      style={{ width: "100px", left: "-20%" }}
                    >
                      שם משפחה חובה
                    </span>
                  </div>
                  <input
                    className="w-[200px] h-[30px] border border-gray-300 rounded px-2"
                    type="text"
                    id="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    style={{ verticalAlign: "middle" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col  gap-2 mt-10 ">
                <label
                  htmlFor="name"
                  className="whitespace-nowrap text-[white]"
                >
                  מספר לחזרה*
                </label>
                <div className="relative">
                  <div
                    className={`tooltip   ${errors.phone ? "opacity-1" : "opacity-0"} transition-all duration-500`}
                  >
                    <span className="tooltiptext"> מספר חובה</span>
                  </div>
                  <input
                    className="w-full h-[30px] border border-gray-300 rounded px-2 "
                    type="text"
                    id="phone"
                    onChange={handleChange}
                    value={values.phone}
                    style={{ verticalAlign: "middle" }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                disabled={isSubmitting}
                className="self-end bg-[white] text-[black] px-14 py-2 rounded-full hover:opacity-90 transition-all"
              >
                שלח\י
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
