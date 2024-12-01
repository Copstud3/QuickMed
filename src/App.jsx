import { useEffect } from "react";
import { Nav, Hero, Features, HowItWorks, Pricing, Faq, Demo, Footer } from "./sections";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration
      easing: 'ease-out-back', // Easing function
      once: false, // Animation happens only once
    });
  }, []);
  return (
    <main className="mx-[80px] font-inter flex-col justify-center items-center max-md:mx-[30px] max-md:max-w-full" >
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
