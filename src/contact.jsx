import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Contact = () => {
  // State variables to manage form input values
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  // State variable to manage alert display
  const [showAlert, setShowAlert] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("name", message);

    // Submit form to Formspree endpoint
    try {
      const response = await fetch("https://formspree.io/f/mqkrddrn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // If submission is successful, show alert
      if (response.ok) {
        setShowAlert(true);
        // Reset form fields
        setEmail("");
        setMessage("");
        setAddress("");
        setPhone("");

        // Hide alert after 2 seconds
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1 border-[3px] border-gray-300 mx-[5%]  shadow-xl rounded-2xl flex flex-col gap-y-4  p-6 items-center"
            onSubmit={handleSubmit}
            style={{ backgroundColor: "fff" }}
          >
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex justify-start items-center bg-gray-400 p-2 rounded-xl text-white"
            >
              <div className="px-[5%] text-center ">
                <h6 className="text-lg lg:text-2xl ">
                  {`أرسل معلوماتك من هنا و سوف نتصل بك لاحقا لتأكيد طلبك`}
                </h6>
              </div>
            </motion.div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-right bg-transparent border-b border-gray-300 py-3 outline-none w-full placeholder:text-gray-400 focus:border-black transition-all resize-none"
              placeholder="الإسم الكامل"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-right bg-transparent border-b border-gray-300 py-3 outline-none w-full placeholder:text-gray-400 focus:border-black transition-all"
              placeholder="البريد الإلكتروني"
              required
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="text-right bg-transparent border-b border-gray-300 py-3 outline-none w-full placeholder:text-gray-400 focus:border-black transition-all"
              placeholder="رقم الهاتف"
              required
            />
            <input
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="text-right bg-transparent border-b border-gray-300 py-3 outline-none w-full placeholder:text-gray-400 focus:border-black transition-all"
              placeholder="عنوان التوصيل"
              required
            />

            <button type="submit" className="btn btn-lg px-24 py-3 ">
              أطلب الآن
            </button>
          </motion.form>
        </div>
      </div>
      {/* Alert for successful form submission */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="bg-accent px-4 py-2 rounded-lg shadow-md border-green text-white"
          >
            <p>Your message has been sent!</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
