// hooks
import { motion as m } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

ShortendLink.propTypes = {
  link: PropTypes.object,
};

export default function ShortendLink({ link }) {
  const [copy, setCopy] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(link.full_short_link);
    setCopy(link.full_short_link);

    setTimeout(() => {
      setCopy(null);
    }, 2500);
  };

  return (
    <m.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.65 } }}
      transition={{ duration: 0.35 }}
      className="shortendLink"
    >
      <p>{link.original_link}</p>
      <m.p layout>{link.full_short_link}</m.p>
      <m.button
        layout
        disabled={!copy ? false : true}
        className={`${copy ? "copy" : ""}`}
        whileTap={{ y: -10 }}
        whileHover={{ backgroundColor: `${copy ? "#393052" : "#A8E0E2"}` }}
        whileFocus={{ backgroundColor: `${copy ? "#393052" : "#A8E0E2"}` }}
        onClick={handleCopy}
      >
        {!copy && "Copy"}
        {copy && "Copied!"}
      </m.button>
    </m.div>
  );
}
