import React ,{useEffect ,useRef}from "react";
import mergeRefs from "react-merge-refs";
import { Container, Row, Col, Button } from "react-bootstrap";
import lottie from "lottie-web";
import useWebAnimations from "@wellyshen/use-web-animations";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Page1() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  const { ref: animate1, playState: animate1playState1 } = useWebAnimations({
    keyframes: [
      {transform:"translate(0px,-20px) "},
      {transform:"translate(0px,20px)"},
      
    ],
    timing: {
      // delay: 50, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      easing: 'ease-in-out',
      direction: 'alternate', // Run the animation forwards and then backwards
      
    },
  }); 
  
  useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("./../animation/Page1.json"),
        });
      }, []);
      const container = useRef(null);
    
  return (
      <div  className="Page1">
    <Container>
      <Row>
        <Col xs lg='6' md='auto' data-aos="fade-right">
       <span className="main-head"> UX Design </span>
       <span className="small-head"> Project 4B</span>
       <span className="smallmessage"> Enhance your communications with psychology-based copywriting and UX writing</span>
       <Button className="head-button shadow" variant="primary">Message Me</Button>
        </Col>
        <Col xs lg='6'>
          <div  style={{marginTop:"100px", width:"110%"}} ref={mergeRefs([container,animate1])}></div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
