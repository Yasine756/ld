import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(245);
  const [showAlert, setShowAlert] = useState(false);


  
  const [sheet] = useState(
    "https://docs.google.com/spreadsheets/d/1AUIcFSUujZcyHJy_wvdbrkHtMHOS-9egiFRYh2UYqmQ/edit?gid=0#gid=0"
  );
  const submit = () => {
    const formData1 = new FormData();
    formData1.append("Phone", phone);
    formData1.append("Address", address);
    formData1.append("Name", message);
    formData1.append("Quantity", quantity);
    formData1.append("Amount", amount);
    fetch(
      "https://script.google.com/macros/s/AKfycby77xR5NcwO0r4ZQDtFoEKzp3FCJL2ie2pvLcYzlj9y82EoNrU1e5e51yfSEuS9r69XLQ/exec",
      {
        method: "POST",
        body: formData1,
      }
    );
  };

  useEffect(() => {
    if (quantity > 1) {
      setAmount(245 * quantity - (245 * quantity * quantity) / 100);
    } else {
      setAmount(245);
    }
  }, [quantity]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    submit();
    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("name", message);
    formData.append("quantity", quantity);
    formData.append("amount", amount);
    formData.append("check orders sheet", sheet);

    try {
      const response = await fetch("https://formspree.io/f/mqkrddrn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowAlert(true);
        setMessage("");
        setAddress("");
        setPhone("");
        setQuantity(1);
        setAmount(245);

        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const add = (e) => {
    e.preventDefault();
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const del = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
          <form
            className="form flex-1 border-[3px] border-gray-300 mx-[5%]  shadow-xl rounded-2xl flex flex-col gap-y-4  p-6 items-center"
            onSubmit={handleSubmit}
            style={{ backgroundColor: "fff" }}
          >
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1 flex justify-start items-center bg-gray-400 p-2 rounded-xl text-white"
            >
              <div className="px-[5%] text-center ">
                <h6 className="text-xl lg:text-2xl font-bold">
                  {`أرسل معلوماتك من هنا و سوف نتصل بك لاحقا لتأكيد طلبك`}
                </h6>
              </div>
            </motion.div>
            <input
              type="text"
              value={message}
              name="Name"
              onChange={(e) => setMessage(e.target.value)}
              className="text-right bg-transparent border-b border-gray-300 py-3 outline-none w-full placeholder:text-gray-400 focus:border-black transition-all resize-none"
              placeholder="الإسم الكامل"
              required
            />
            <input
              type="text"
              value={phone}
              name="Phone"
              onChange={(e) => setPhone(e.target.value)}
              className="text-right bg-transparent border-b border-gray-300 py-3 outline-none w-full placeholder:text-gray-400 focus:border-black transition-all"
              placeholder="رقم الهاتف"
              required
            />
            <input
              type="address"
              value={address}
              name="Address"
              onChange={(e) => setAddress(e.target.value)}
              className="text-right bg-transparent border-b border-gray-300 py-3 outline-none w-full placeholder:text-gray-400 focus:border-black transition-all"
              placeholder="عنوان التوصيل"
              required
            />
            <input type="hidden" name="quantity" value={quantity} />
            <input type="hidden" name="amount" value={amount} />
            <div className="flex items-center my-5">
              <button
                onClick={del}
                className="bg-gray-200 px-4 text-2xl rounded-lg border-l-[1px] border-b-[1px] border-gray-400 py-2 shadow-md hover:border-none"
              >
                -
              </button>
              <div className="text-3xl mx-10">
                <h1 className="text-center" name="Quantity">
                  {" "}
                  {quantity}
                </h1>
              </div>
              <button
                onClick={add}
                className="bg-gray-200 px-4 text-2xl rounded-lg border-r-[1px] border-b-[1px] border-gray-400 py-2 shadow-md hover:border-none"
              >
                +
              </button>
            </div>
            <div className="flex text-green-600 font-bold text-lg">
              ريال{" "}
              <h5 className="mx-1" name="Amount">
                {" "}
                {amount}
              </h5>
            </div>
            <button
              type="submit"
              className="btn p-3 rounded-3xl text-white w-[150px] font-bold text-xl shadow-lg"
            >
              أطلب الآن
            </button>
          </form>
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