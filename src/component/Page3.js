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
          animationData: require("./../animation/Page3.json"),
        });
      }, []);
      const container = useRef(null);
    
  return (
      <div  className="Page1">
    <Container>
      <Row>
        <Col xs lg='6' data-aos="fade-up" md='auto'>
       <span className="main-head" style={{fontSize:'50px'}}> Website Copywriting </span>
       <span className="smallmessage" style={{fontSize:'18px'}}>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</span>
       <span className="smallmessage">
         <ul className="u-list">
           <li>Information Architecture</li>
           <li>Wireframes</li>
           <li>Competitor Analysis</li>
           <li>On-page SEO</li>
           <li>Off-page SEO</li>
           <li>USP/UVP</li>
           <li>Landing Page</li>
           <li>Sales Letter</li>
         </ul>
       </span>
        </Col>
        <Col xs lg='6'>
          <div  style={{ width:"110%"}} ref={mergeRefs([container,animate1])}></div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
