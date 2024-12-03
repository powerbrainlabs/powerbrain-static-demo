import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Romulus",
          from_email: form.email,
          from_phone: form.phone,
          to_email: "tech@romulusoil.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
            phone: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-8 flex flex-col lg:flex-row gap-6 overflow-hidden p-6 bg-gray-100 shadow-md">
      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="lg:w-1/2 w-full bg-white p-6 rounded-lg shadow-lg border border-gray-300"
      >
        <h3
          style={{ color: "#333", fontSize: "1.5rem" }}
          className={styles.sectionHeadText}
        >
          Contact Us.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-gray-800 font-medium text-sm">Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              style={{ borderWidth: "1px", borderColor: "#ddd" }}
              className="py-2 px-5 placeholder:text-gray-400 text-gray-800 rounded bg-[#f9f9f9] font-medium text-sm"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-800 font-medium text-sm">Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              style={{ borderWidth: "1px", borderColor: "#ddd" }}
              className="py-2 px-5 placeholder:text-gray-400 text-gray-800 rounded bg-[#f9f9f9] font-medium text-sm"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-800 font-medium text-sm">Phone Number</span>
            <input
              name="phone"
              type="number"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone no."
              style={{ borderWidth: "1px", borderColor: "#ddd" }}
              className="py-2 px-5 placeholder:text-gray-400 text-gray-800 rounded bg-[#f9f9f9] font-medium text-sm"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-800 font-medium text-sm">Message</span>
            <textarea
              rows={3}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              style={{ borderWidth: "1px", borderColor: "#ddd" }}
              className="py-2 px-5 placeholder:text-gray-400 text-gray-800 rounded bg-[#f9f9f9] font-medium text-sm"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-900 py-2 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-sm shadow-primary text-sm"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      



      {/* Contact Info Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="lg:w-1/2 w-full flex flex-col gap-4 items-center justify-center lg:pl-10"
      >
        <h1
          style={{ color: "#333" }}
          className="text-center text-[1.2rem] lg:text-[1.8rem] font-bold"
        >
          Contact Info
        </h1>
        <div className="flex flex-col items-center gap-3">
          <span className="text-center text-sm lg:text-[1rem] text-gray-700">
            <span className="font-bold">
              {" "}
              <EmailIcon /> Email
            </span>{" "}
            : support@powerbrainlabs.com
          </span>
          <span className="text-center text-sm lg:text-[1.3rem] text-gray-700">
            <span className="font-bold">
              {" "}
              <LocalPhoneIcon /> Contact No
            </span>{" "}
            : +91 7994805975
          </span>
        </div>

        <div>
        <div className="mt-4 text-gray-700">
   
        <div className="flex justify-around mt-6 gap-5">

          {/* India Section with Taj Mahal */}
  <div className="flex flex-col items-center">
    {/* <img src="path_to_taj_mahal_image" alt="Taj Mahal" className="w-16 h-16" /> */}
    <span className="text-gray-700 mt-2">India</span>
  </div>
  
  {/* UAE Section with Burj Khalifa */}
  <div className="flex flex-col items-center">
    {/* <img src="path_to_burj_khalifa_image" alt="Burj Khalifa" className="w-16 h-16" /> */}
    <span className="text-gray-700 mt-2">UAE</span>
  </div>

  

  {/* US Section with Statue of Liberty */}
  <div className="flex flex-col items-center">
    {/* <img src="path_to_statue_of_liberty_image" alt="Statue of Liberty" className="w-16 h-16" /> */}
    <span className="text-gray-700 mt-2">USA</span>
  </div>
</div>

    
  </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
