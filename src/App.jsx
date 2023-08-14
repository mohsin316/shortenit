import "./App.css";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Details from "./components/Details";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Form />
        <Details />
        <Cta />
        <Footer />
      </main>
    </>
  );
}

export default App;
