// hooks
import { motion as m } from "framer-motion";

export default function ShortendLink() {
  return (
    <div className="shortendLink">
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor.</p>
      <m.button
        whileHover={{ backgroundColor: "#A8E0E2" }}
        whileFocus={{ backgroundColor: "#A8E0E2" }}
      >
        Copy
      </m.button>
    </div>
  );
}
