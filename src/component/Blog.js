import React, {useEffect} from 'react';
import {Col} from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Blogs(){
    useEffect(() => {
        AOS.init({duration: 2000});
      }, [])
    return(
        <div className="Blog-page">
            <div className="Heading1"><span className=" Headback1">Blogs</span></div>
            <div className="blog-grid">
                 <Col xs="12" lg="5"  className="subgrid blog1" data-aos="zoom-in-up">
                     <span className="subtxt"><p>What is digital copywriting? The evolution of copy from Mad Men to UX writing and beyond</p></span>
                 </Col>
                 <Col xs="12" lg="5" className="subgrid blog2" data-aos="zoom-in-up">
                     <span className="subtxt"><p>What is digital copywriting? The evolution of copy from Mad Men to UX writing and beyond</p></span>
                 </Col>
                 <Col xs="12" lg="5" className="subgrid blog3" data-aos="zoom-in-up">
                     <span className="subtxt"><p>What is digital copywriting? The evolution of copy from Mad Men to UX writing and beyond</p></span>
                 </Col>
                 <Col xs="12" lg="5" className="subgrid blog4" data-aos="zoom-in-up">
                     <span className="subtxt"><p>What is digital copywriting? The evolution of copy from Mad Men to UX writing and beyond</p></span>
                 </Col>
            </div>
        </div>
    )
}