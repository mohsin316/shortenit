import "./Form.css";
// hooks
import { motion as m } from "framer-motion";

// componenets
import ShortendLink from "./ShortendLink";

// images
import BgMobile from "../assets/bg-shorten-mobile.svg";
import BgDesktop from "../assets/bg-shorten-desktop.svg";

// hooks
import { useState } from "react";
import { useGetData } from "../hooks/useGetData";

export default function Form() {
  const [link, setLink] = useState("");
  const { getData, isloading, error, data } = useGetData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getData(link);
    setLink("");
  };

  return (
    <section className="form-section">
      <div className="container form-container">
        <form onSubmit={handleSubmit}>
          <div
            className="bg-container"
            style={{ backgroundImage: `url(${BgDesktop}), url(${BgMobile})` }}
          ></div>
          <input
            className={`${error ? "error" : ""}`}
            type="text"
            onChange={(e) => setLink(e.target.value)}
            value={link}
            placeholder="Shorten a link here..."
          />
          <m.button
            disabled={isloading}
            whileHover={{ backgroundColor: "#A8E0E2" }}
            whileFocus={{ backgroundColor: "#A8E0E2" }}
          >
            Shorten it!
          </m.button>

          {error && <p>{error}</p>}
        </form>
        {data.length > 0 &&
          data.map((link) => <ShortendLink key={link.code} link={link} />)}
      </div>
    </section>
  );
}
