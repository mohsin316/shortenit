import "./Cta.css";
// hooks
import { motion as m } from "framer-motion";

// images
import BgMobile from "../assets/bg-boost-mobile.svg";
import BgDesktop from "../assets/bg-boost-desktop.svg";

export default function Cta() {
  return (
    <section className="cta-section" style={{}}>
      <div
        className="bg-container"
        style={{ backgroundImage: `url(${BgDesktop}), url(${BgMobile})` }}
      ></div>
      <div className="container cta-container">
        <h2>Boost your links today</h2>
        <m.button
          whileHover={{ backgroundColor: "#A8E0E2" }}
          whileFocus={{ backgroundColor: "#A8E0E2" }}
        >
          Get started
        </m.button>
      </div>
    </section>
  );
}
