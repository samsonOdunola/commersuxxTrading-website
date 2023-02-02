import Navbar from "../components/navbar/Navbar";
import Carosel from "../components/courasel/carosel";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/actions";
import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";
import content from "../footer-content";
const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(closeMenu());
    }, 1200);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar color="#23a1fc" backgroundcolor="white" colorOnHover="#FF8000" />
      <Carosel />
      <section className="intro-section">
        <h2>Whole sale and Retail Distributors in Nigeria</h2>
        <div className="container">
          <div>
            <p>
              If you're looking for a dependable and efficient distribution
              company, don't hesitate to contact us today. We would be more than
              happy to provide you with a quote and help you with all of your
              distribution needs
            </p>
            <button>
              <Link className="link">CONTACT US</Link>
            </button>
          </div>
          <img
            src={require("../assets/loading, package, inventory, storage, warehouse, forklift, transport.png")}
            alt=""
          />
        </div>
      </section>
      <section className="corevalues-section">
        <h2>Our Core Values</h2>
        <div className="card-container">
          <div
            className="card customer-satisfaction"
            style={{ backgroundColor: "#1B998B" }}
          >
            <h3>Customer Satisfaction</h3>
            <p>
              Building long-term relationships with our clients by consistently
              exceeding their expectations.
            </p>
          </div>
          <div
            className="card reliability"
            style={{ backgroundColor: "#EF959C" }}
          >
            <h3>Reliability</h3>
            <p>
              We ensure that all deliveries are made on time and in a safe and
              efficient manner.
            </p>
          </div>
          <div
            className="card flexibility"
            style={{ backgroundColor: "#2E4052" }}
          >
            <h3>Flexibility</h3>
            <p>
              Offering a wide range of services and delivery options to meet the
              unique needs of our clients.
            </p>
          </div>
          <div
            className="card integrity"
            style={{ backgroundColor: "#5C5346" }}
          >
            <h3>Integrity</h3>
            <p>
              Maintaining the highest ethical standards and being transparent in
              all of our business dealings.
            </p>
          </div>
        </div>
      </section>
      {/* will fix this section later */}
      {/* <section className="ourtrackrecod-section">
        <div>
          <h3>Our Track Record</h3>
          <p>
            We currently work with over 60 different Nigerian brands to
            distribute products across all the regions of Nigeria
          </p>
        </div>
        <div className="circular-carosel-container">
          <div className="slide slide-1"></div>
          <div className="slide slide-2"></div>
          <div className="slide slide-3"></div>
          <div className="slide slide-4"></div>
          <div className="slide slide-5"></div>
        </div>
      </section> */}
      <section className="What-we-offer-section">
        <h3>What We offer</h3>
        <div className="container">
          <div className="tile-1">
            <p>OVER 12,000SQM OF WAREHOUSE SPACE</p>
          </div>
          <div className="tile-2">
            <p>Direct Access to over 200 Retail Outlets </p>
          </div>
          <div className="tile-3">
            <p>Variety of vehicles to get your goods to the consumers </p>
          </div>
        </div>
      </section>
      <Footer content={content}></Footer>
    </motion.div>
  );
};

export default LandingPage;
