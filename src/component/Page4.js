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
      {transform:"translate(-60px,0px) scale(0.9)"},
      {transform:"translate(-10px,0px)"},
      
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
          animationData: require("./../animation/Page4.json"),
        });
      }, []);
      const container = useRef(null);
    
  return (
      <div  className="Page1">
    <Container>
      <Row>
        <Col xs lg='6' md='auto' >
          <div  style={{marginTop:"100px", width:"110%"}} ref={mergeRefs([container,animate1])}></div>
        </Col>
        <Col data-aos="fade-right" xs lg='6'>
       <span className="main-head" style={{fontSize:'50px'}}> Content Writing </span>
       <span className="smallmessage" style={{fontSize:'18px'}}>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</span>
       <span className="smallmessage">
         <ul className="u-list">
           <li>Microcopy</li>
           <li>Taxonomy & Labeling</li>
           <li>Chatbots</li>
           <li>User Research</li>
           <li>Content Style Guide</li>
           <li>User Testing</li>
           <li>Design Principles</li>
           <li>Prototype</li>
         </ul>
       </span>
       
        </Col>
      </Row>
    </Container>
    </div>
  );
}
