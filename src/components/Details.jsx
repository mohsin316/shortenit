// images and styles
import "./Details.css";
import Graph from "../assets/icon-brand-recognition.svg";
import Pens from "../assets/icon-fully-customizable.svg";
import Clock from "../assets/icon-detailed-records.svg";

export default function Details() {
  return (
    <section className="details-section">
      <div className="container">
        <div className="grid-container even-columns">
          <div className="stats-holder">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web wiht our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="facility-container">
            <img src={Graph} alt="graph" />
            <strong>Brand Recognition</strong>
            <p>
              Boost your brand recognition with each click. Generic links
              dont&apos;t mean a thing. Branded links help instil confidence in
              your content.{" "}
            </p>
          </div>
          <div className="facility-container">
            <img src={Clock} alt="clock" />
            <strong>Detailed Records</strong>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="facility-container">
            <img src={Pens} alt="pens" />
            <strong>Fully Customizable</strong>
            <p>
              improve brand awareness and content discoverability through
              cuztomizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
