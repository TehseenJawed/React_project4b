import React , {useEffect ,useRef}from 'react';
import lottie from "lottie-web";

export default function Footer(){
    useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("./../animation/Footer.json"),
        });
      }, []);
      const container = useRef(null);
  
    return(
        <div className="Footer-page">
            <div className="Footer-head">
            Based in Sydney, Australia. Available worldwide.
            </div>
            <div style={{width:'20%',marginLeft:'40%', marginTop:'5%'}} className="Anim" ref={container}></div>
            <div className="Footer-head footer-end" >
            © Cortex Copywriter 2020 | ABN 341 1599 0520
            </div>
        </div>
    )
}