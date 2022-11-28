import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
// import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";
import Process from "./components/process/Process";
import Modal from "./components/modal/Modal";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      {/* <Experience /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Process />
      <Modal />
      <Contact />
      <Footer />
    </div>
  );
}
