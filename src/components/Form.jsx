import "./Form.css";

// componenets
import ShortendLink from "./ShortendLink";

export default function Form() {
  return (
    <section className="form-section">
      <div className="container form-container">
        <form>
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten it!</button>
        </form>

        {/* <ShortendLink />
        <ShortendLink />
        <ShortendLink /> */}
      </div>
    </section>
  );
}
