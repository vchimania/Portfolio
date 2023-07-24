import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ContactForm = () => {
  const {
    formState: {},
  } = useForm({});

  const handleSubmit = (e) => {
    console.log({ e });
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_dsff3m3",
        "template_zj8t2yk",
        e.target,
        "psvDqWKpJChroTZr2"
      )
      .then((result) => {
        console.log("Email sent successfully!", result.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Error sending email:");
      });

    // Reset the form
    e.target.reset();
  };

  return (
    <div className="shadow-2xl border rounded-2xl mt-3">
      <div className="p-14">
        <div className="text-5xl my-5 font-bold flex items-center">
          <div>Contact Me</div>
          <hr className="border border-pink-500 w-36 ml-3" />
        </div>

        <div className="py-8">
          <div className="text-gray-400 font-semibold text-2xl">
            I'm always open to discussing product
          </div>
          <div className="text-gray-400 font-semibold text-xl">
            design work or partnerships.
          </div>
          <div className="text-gray-400 font-semibold text-sm">
            Please Fill Required Fields
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-9">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name
            </label>
          </div>


          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="message"
              id="message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Message (drop you email or contact number)
            </label>
          </div>
          <div className="py-4 text-center">
            <button
              type="submit"
              className="rounded-full py-3 px-8 font-bold border border-[#f8585f] text-[#e02a74] "
            >
             <CheckCircleIcon className="w-7 h-7 inline-flex mr-2"/>

             Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
