import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Work from "../components/work/Work";
import Process from "../components/process/Process";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Work />
      <Experience />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
