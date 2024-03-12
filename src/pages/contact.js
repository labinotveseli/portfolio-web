import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { useState } from "react";
import Modal from "react-modal";
import { sendContactForm } from "../lib/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const Contact = () => {
  const [state, setState] = useState({
    isLoading: false,
    error: "",
    showModal: false,
    values: initValues,
  });

  const [touched, setTouched] = useState({});

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(state.values);
      setTouched({});
      setState((prev) => ({
        ...prev,
        showModal: true,
        isLoading: false,
      }));
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  const closeModal = () => {
    setState((prev) => ({
      ...prev,
      showModal: false,
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

                <form onSubmit={onSubmit}>
                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />

                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Subject"
                    name="_subject"
                  />

                  <textarea
                    className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Type your message here..."
                    name="message"
                    style={{ height: "121px" }}
                  ></textarea>
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
                        className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 rounded focus:outline-none focus:shadow-outline mt-2 sm:mt-0"
                        type="reset"
                        value="Reset"
                      />
                    </div>
                  </div>
                </form>
                <Modal
                  isOpen={state.showModal}
                  contentLabel="Message Sent Successfully"
                >
                  <h2>Message Sent Successfully!</h2>
                  <p>Thank you for reaching out.</p>
                  <button onClick={closeModal}>Close</button>
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
