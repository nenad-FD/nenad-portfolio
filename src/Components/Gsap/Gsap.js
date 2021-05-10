import React, { useRef, useEffect, useState } from "react";
import "./Gsap.css";
import { TweenMax, Power3 } from "gsap";

function Gsap() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setState(true);
  };
  const handleShrink = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  useEffect(() => {
    TweenMax.to(app, 0, {
      css: { visibility: "visible" },
      ease: Power3.easeOut,
    });
    //TweenMax.from(circle, 1, { opacity: 0, x: 140, ease: Power3.easeOut });
    /*TweenMax.from(circleRed, 1, {
      opacity: 0,
      x: 160,
      ease: Power3.easeOut,
      delay: 0.8,
    });
    TweenMax.from(circleBlue, 1, {
      opacity: 0,
      x: 180,
      ease: Power3.easeOut,
      delay: 1.5,
    });*/
    //Easier way to write this
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      1,
      {
        opacity: 0,
        x: 140,
        ease: Power3.easeOut,
      },
      0.2
    );
  }, []);
  return (
    <div ref={(el) => (app = el)} className="gsap">
      <div className="circle-container">
        <div ref={(el) => (circle = el)} className="circle"></div>
        <div
          onClick={state === false ? handleExpand : handleShrink}
          ref={(el) => (circleRed = el)}
          className="circle red"
        ></div>
        <div ref={(el) => (circleBlue = el)} className="circle blue"></div>
      </div>
    </div>
  );
}

export default Gsap;
