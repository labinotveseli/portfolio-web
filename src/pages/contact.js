import * as Yup from "yup";
import React, { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { useState } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

const initValues = { name: "", email: "", subject: "", message: "" };

const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;

const validationSchema = Yup.object().shape({
  user_name: Yup.string()
    .matches(/^[a-zA-Z\s]{3,}$/, "Name should have at least 3 letters")
    .required("Name is required"),
  user_email: Yup.string()
    .matches(emailRegex, "Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .matches(/^[a-zA-Z\s]{3,}$/, "Subject should have at least 3 letters")
    .required("Subject is required"),
  message: Yup.string()
    .matches(/^[a-zA-Z\s]{3,}$/, "Message should have at least 3 letters")
    .required("Message is required"),
});

const Contact = () => {
  const [state, setState] = useState({
    isLoading: false,
    error: "",
    showModal: false,
    values: initValues,
    errors: {},
  });

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(state.values, { abortEarly: false });

      const individualErrors = Object.keys(state.errors).filter(
        (key) => key !== "general" && state.errors[key]
      );

      if (individualErrors.length > 0) {
        setState((prev) => ({
          ...prev,
          errors: {
            ...prev.errors,
            general: "",
          },
        }));

        return;
      }

      emailjs
        .sendForm("service_bdwb3pt", "template_2cyvg9g", form.current, {
          publicKey: "oLcPqSafAzwVscgJ3",
        })
        .then(() => {
          setState((prev) => ({
            ...prev,
            showModal: true,
          }));
          console.log("SUCCESS!");
        })
        .catch((error) => {
          console.log("FAILED...", error.text);
        });
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });

      setState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          ...validationErrors,
        },
      }));

      console.log("Validation Error:", validationErrors);
    }
  };

  const closeModal = () => {
    form.current.reset();
    setState((prev) => ({
      ...prev,
      showModal: false,
      values: { ...initValues },
      errors: {},
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
      errors: {
        ...prev.errors,
        [name]: "",
        general: "",
      },
    }));
  };

  return (
    <>
      <Head>
        <title>Contact Page | Labinot Veseli Portfolio | </title>
        <meta name="description" content="" />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Reach Out: Let's Create Something Amazing"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="py-6 flex justify-center w-1/3 mx-auto sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto xs:max-w-sm xs:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#708090] to-[#536872] shadow-lg transform -skew-y-6 -rotate-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl rounded-3xl"></div>
              <div className="text-white relative px-8 py-10 bg-gradient-to-l from-[#536878] to-[#36454f] shadow-lg sm:rounded-3xl sm:p-15 rounded-3xl">
                <div className="text-center pb-6">
                  <p className="text-gray-300 xs:text-lg">
                    Fill up the form below to send a message.
                  </p>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      state.errors.user_name ? "border-red-500" : "mb-4"
                    }`}
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    value={state.values.user_name}
                    onChange={handleInputChange}
                  />
                  {state.errors.user_name && (
                    <p className="text-red-500 text-sm mb-4">
                      {state.errors.user_name}
                    </p>
                  )}

                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      state.errors.user_email ? "border-red-500": "mb-4"
                    }`}
                    type="text"
                    placeholder="Email"
                    name="user_email"
                    value={state.values.user_email}
                    onChange={handleInputChange}
                  />
                  {state.errors.user_email && (
                    <p className="text-red-500 text-sm mb-4">
                      {state.errors.user_email}
                    </p>
                  )}

                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      state.errors.subject ? "border-red-500" : "mb-4"
                    }`}
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={state.values.subject}
                    onChange={handleInputChange}
                  />
                  {state.errors.subject && (
                    <p className="text-red-500 text-sm mb-4">
                      {state.errors.subject}
                    </p>
                  )}

                  <textarea
                    className={`shadow min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      state.errors.message ? "border-red-500" : "mb-4"
                    }`}
                    type="text"
                    placeholder="Type your message here..."
                    name="message"
                    style={{ height: "121px" }}
                    value={state.values.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {state.errors.message && (
                    <p className="text-red-500 text-sm mb-4">
                      {state.errors.message}
                    </p>
                  )}

                  <div className="flex sm:flex-row justify-between">
                    <div className="mr-20">
                      <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 rounded mb-2 sm:mb-0 focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Send"
                      />
                    </div>
                    <div>
                      <input
                        className="shadow bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 rounded focus:outline-none focus:shadow-outline mt-2 sm:mt-0"
                        type="reset"
                        value="Reset"
                      />
                    </div>
                  </div>

                  {state.errors.general && (
                    <p className="text-red-500 text-sm mt-4">
                      {state.errors.general}
                    </p>
                  )}
                </form>

                <Modal
                  isOpen={state.showModal}
                  contentLabel="Message Sent Successfully"
                  className="rounded-3xl shadow-2xl items-center justify-center xs:w-[90%] sm:w-[90%]"
                  style={{
                    overlay: {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    content: {
                      borderRadius: "16px",
                      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "white",
                      alignItems: "center",
                    },
                    width: "50%",
                    margin: "auto",
                  }}
                >
                  <div className="p-8 text-center sm:p-12">
                    <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                      Message Sent Successfully!
                    </p>
                    <h2 className="mt-6 text-3xl font-bold">
                      Thank you for reaching out.
                    </h2>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="mt-8 mb-8 w-[30%] rounded-full bg-pink-600 py-4 text-lg font-semibold text-white shadow-xl"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
