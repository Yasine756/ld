import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Contact = () => {
  // State variables to manage form input values
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(245)

  useEffect(() => {
    if(quantity > 1){
      setAmount( (245*quantity)-(245*quantity*quantity/100));
    }else{
      setAmount(245)
    }
  },[quantity]);
  

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
    formData.append("quantity", quantity);

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
        setQuantity(1);

        // Hide alert after 2 seconds
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  function add(e) {
    e.preventDefault();
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  }

  function del(e) {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <section className="lg:section py-10" id="contact">
      <div className="px-5">
        <div className="rounded-3xl w-[50%] px-3">
          <h3 className="text-green-700 font-bold text-2xl">245 ريال</h3>
          <del className="text-red-700">
            <p>ريال 270</p>
          </del>
        </div>
      </div>
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
            <div className="flex-1 flex justify-start items-center bg-gray-400 p-2 rounded-xl text-white">
              <div className="px-[5%] text-center ">
                <h6 className="text-xl lg:text-2xl font-bold">
                  {`أرسل معلوماتك من هنا و سوف نتصل بك لاحقا لتأكيد طلبك`}
                </h6>
              </div>
            </div>
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

            <div className="flex items-center my-5">
              <button
                onClick={del}
                className="bg-gray-200 px-4 text-2xl rounded-lg border-l-[1px] border-b-[1px] border-gray-400 py-2 shadow-md hover:border-none"
              >
                -
              </button>
              <div className="text-3xl mx-10">
                <h1 className="text-center"> {quantity}</h1>
              </div>
              <button
                onClick={add}
                className="bg-gray-200 px-4 text-2xl rounded-lg border-r-[1px] border-b-[1px] border-gray-400 py-2 shadow-md hover:border-none"
              >
                +
              </button>
            </div>
            <div className="flex text-green-600 font-bold text-lg">
              ريال <h5 className="mx-1"> {amount}</h5>
            </div>
            <button
              type="submit"
              className="btn p-3 rounded-3xl text-white w-[150px] font-bold text-xl shadow-lg"
            >
              أطلب الآن
            </button>
          </motion.form>
        </div>
      </div>
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
            className="bg-green-100 h-[20%] px-4 py-2 rounded-lg shadow-md border-green text-green-800 font-bold text-2xl flex justify-center items-center text-center"
          >
            <p>لقد تم إرسال معلوماتك بنجاح, شكرا على ثقتكم</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
