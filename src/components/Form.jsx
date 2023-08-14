import "./Form.css";
// hooks
import { motion as m } from "framer-motion";

// componenets
import ShortendLink from "./ShortendLink";

// images
import BgMobile from "../assets/bg-shorten-mobile.svg";
import BgDesktop from "../assets/bg-shorten-desktop.svg";

export default function Form() {
  return (
    <section className="form-section">
      <div className="container form-container">
        <form>
          <div
            className="bg-container"
            style={{ backgroundImage: `url(${BgDesktop}), url(${BgMobile})` }}
          ></div>
          <input type="text" placeholder="Shorten a link here..." />
          <m.button
            whileHover={{ backgroundColor: "#A8E0E2" }}
            whileFocus={{ backgroundColor: "#A8E0E2" }}
          >
            Shorten it!
          </m.button>
        </form>

        <ShortendLink />
        <ShortendLink />
        <ShortendLink />
      </div>
    </section>
  );
}
