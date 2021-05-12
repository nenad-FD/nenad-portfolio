import React, { useEffect, useRef } from "react";
import "./Contact.css";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  let card = useRef(null);
  let cardsContainer = useRef(null);

  useEffect(() => {
    gsap.from(cardsContainer, {
      duration: 2,
      y: "200",
      opacity: 0.2,
      ease: "ease-in",
      scrollTrigger: {
        trigger: card,
      },
    });
  }, []);
  return (
    <div className="contact" id="contact">
      <div className="contact__header">
        <h2 className="contact__heading">Get in touch</h2>
        <p className="contact__text lead">
          Want to get in touch? I'd love to hear from you. Here's how you can
          reach me...
        </p>
      </div>

      <div className="contact__content">
        <div
          className="contact__content--container container"
          ref={(el) => (cardsContainer = el)}
        >
          <div className="contact__card" ref={(el) => (card = el)}>
            <div className="card__img">
              <img src="/img/Mobile.svg" alt="mobile-img" />
            </div>
            <h4 className="card__title">Phone</h4>
            <span className="card__phone">+381 61 642-76-48</span>
          </div>
          <div className="contact__card">
            <div className="card__img">
              <img src="/img/Email.svg" alt="email-img" />
            </div>
            <h4 className="card__title">Email</h4>
            <span className="card__email">nenadlale96@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
