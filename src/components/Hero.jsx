// hooks
import { motion as m } from "framer-motion";

// images
import HeroImg from "../assets/illustration-working.svg";

// styles
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="even-columns hero-container">
          <div className="title">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand&apos;s recognition and get detailed insights on
              how links are performing
            </p>
            <m.button
              whileHover={{ opacity: 0.5 }}
              whileFocus={{ opacity: 0.5 }}
            >
              Get started
            </m.button>
          </div>
          <div className="hero-img">
            <img src={HeroImg} alt="Hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
