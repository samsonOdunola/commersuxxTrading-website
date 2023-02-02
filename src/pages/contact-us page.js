import Navbar from "../components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { closeMenu } from "../redux/actions";
import { motion } from "framer-motion";
import axios from "axios";

const Contactus = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(true);
  const [resMessage, setResMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeMenu());
    }, 1200);
  }, []);

  const sendMail = () => {
    setLoading(true);
    let url = "https://grumpy-teal-bass.cyclic.app/contact-us/sendmail";
    let mailInfo = { fullName, emailAddress, message };

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
      if (message !== "") {
        axios
          .post(url, mailInfo)
          .then((res) => {
            setResMessage(res.data.message);
            setResponse(res.data.status);
            setLoading(false);
            if (res.data.status) {
              setMessage("");
              setEmailAddress("");
              setFullName("");
            }
          })
          .catch((err) => {
            setResMessage(err.message);
            setResponse(false);
            setLoading(false);
          });
      } else {
        setResponse(false);
        setResMessage("Please write a message");
        setLoading(false);
      }
    } else {
      setResponse(false);
      setResMessage("Please check your email address");
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="contact-us-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar color="white" backgroundcolor="#23a1fc" colorOnHover="#FFEE00" />
      <div className="banner">
        <p>CONTACT</p>
      </div>
      <section className="formcarry-container">
        <div>
          {resMessage !== "" && (
            <p className={response ? "alert-success" : "alert-danger"}>
              {resMessage}
            </p>
          )}
          <h1>Contact Us</h1>
          <div className="formcarry-block">
            <label htmlFor="fc-generated-1-name">Full Name</label>
            <input
              type="text"
              name="name"
              value={fullName}
              id="fc-generated-1-name"
              placeholder="Your first and last name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="formcarry-block">
            <label htmlFor="fc-generated-1-email">Your Email Address</label>
            <input
              type="email"
              name="email"
              id="fc-generated-1-email"
              placeholder="john@doe.com"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>

          <div className="formcarry-block">
            <label htmlFor="fc-generated-1-message">Your message</label>
            <textarea
              name="message"
              id="fc-generated-1-message"
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="formcarry-block">
            <button onClick={sendMail}>
              {loading ? (
                <div className="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>
      </section>
      {/* <Footer content={content}></Footer> */}
    </motion.div>
  );
};

export default Contactus;
