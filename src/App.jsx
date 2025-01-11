import { useEffect } from "react";
import { Nav, Hero, Features, HowItWorks, Pricing, Faq, Demo, Footer } from "./sections";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration
      easing: 'ease-out', // Easing function
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <main className="font-inter w-screen mx-auto md:max-w-screen-md xl:max-w-screen-xl" >
      <Nav />
      <section className="" data-aos="fade-up">
        <Hero />
      </section>
      <section className="my-24"data-aos="fade-up">
        <Features />
      </section>
      <section className="my-24"data-aos="fade-up">
        <HowItWorks />
      </section>
      <section className="my-24"data-aos="fade-up">
        <Pricing />
      </section>
      <section className=""data-aos="fade-up">
        <Faq />
      </section>
      <section className=""data-aos="fade-up">
        <Demo />
      </section>
      <section className="" data-aos="fade-up">
        <Footer />
      </section>
      <BackToTopButton />
    </main>
  );
}
