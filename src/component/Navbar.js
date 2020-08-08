import React, { useEffect, useRef } from "react";
import {Col } from "react-bootstrap";
import lottie from "lottie-web";
import useWebAnimations from "@wellyshen/use-web-animations";
import mergeRefs from "react-merge-refs";

export default function Navigation() {

  const { ref: animate1, playState: animate1playState1 } = useWebAnimations({
    keyframes: [
      {transform:"translate(0px,0px) scale(0.5)"},
      {transform:"translate(700px,50px)"},
      {transform:"translate(1450px,0px) scale(0.5)"},
      
    ],
    timing: {
      delay: 50, // Start with a 500ms delay
      duration: 15000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      easing: 'ease-in-out',
      // direction: 'alternate', // Run the animation forwards and then backwards
      
    },
  }); 

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./../animation/profile.json"),
    });
  }, []);
  const container = useRef(null);

  return (
    <div className='navbar'>
      <Col className='logos' ref={mergeRefs([container,animate1])}></Col>
    </div>
  );
}
