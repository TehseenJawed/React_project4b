import React, {useEffect} from 'react';
import {Col} from 'react-bootstrap';
import Item from './../img/item.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function SamplePage(){
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])
    return(
        <div className="Page1">
            <div className="Heading1"><span className=" Headback1">Samples</span></div>
            <div className="Heading1">Useful UX</div>
            <div className="Samples">
                <Col xs lg="3" className="sample1" data-aos="flip-up">
                    <img className="sample_image" src={Item} />
                    <hr />
                    <h5>Scripted Chatbot</h5>
                    <p>Conversation design guidelines such as chatbot personality, flowcharts, and scripts helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot that guides customers in choosing the right mattress for their weight range.</p>
                </Col>
                <Col xs lg="3" className="sample1" data-aos="flip-up">
                    <img className="sample_image" src={Item} />
                    <hr />
                    <h5>User Onboarding</h5>
                    <p>Here is the first screen in an onboarding process I wrote for a SaaS product. To create a smooth introduction to the product and improve conversion rates, I used reassuring details and informative labels to clear possible uncertainties and reduce ambiguity.</p>
                </Col>
                <Col xs lg="3" className="sample1" data-aos="flip-up">
                    <img className="sample_image" src={Item} />
                    <hr />
                    <h5>Product Development</h5>
                    <p>As the sole UX writer on a product team building the 'Uber of marketing', I wrote and designed web copy, microcopy, notifications, forms, FAQs, sales video script, automated emails, signup page, login page, pricing page, checkout page, and more.</p>
                </Col>
                
            </div>
            <div className="Heading1">Digital Copy</div>
            <div className="Samples">
                <Col xs lg="3" className="sample1" data-aos="flip-up">
                    <img className="sample_image" src={Item} />
                    <hr />
                    <h5>Rebranding Campaign</h5>
                    <p>I developed a new brand voice and brand identity – content style guide, design system, brand name, logo, tagline, and website – to improve communications and online presence.</p>
                </Col>
                <Col xs lg="3" className="sample1" data-aos="flip-up">
                    <img className="sample_image" src={Item} />
                    <hr />
                    <h5>Facebook Ads</h5>
                    <p>I developed a new brand voice and brand identity – content style guide, design system, brand name, logo, tagline, and website – to improve communications and online presence.</p>
                </Col>
                <Col xs lg="3" className="sample1" data-aos="flip-up">
                    <img className="sample_image" src={Item} />
                    <hr />
                    <h5>Product Development</h5>
                    <p>I developed a new brand voice and brand identity – content style guide, design system, brand name, logo, tagline, and website – to improve communications and online presence.</p>
                </Col>
                <Col xs lg="3" className="sample1 margin-lft" data-aos="flip-up">
                    <img className="sample_image" src={Item} />
                    <hr />
                    <h5>YouTube Ad</h5>
                    <p>I developed a new brand voice and brand identity – content style guide, design system, brand name, logo, tagline, and website – to improve communications and online presence.</p>
                </Col>
                <Col xs lg="3" className="sample1" data-aos="flip-up">
                    <img className="sample_image" src={Item} />
                    <hr />
                    <h5>Pilot Screenplay</h5>
                    <p>I developed a new brand voice and brand identity – content style guide, design system, brand name, logo, tagline, and website – to improve communications and online presence.</p>
                </Col>
                
            </div>
        </div>
    )
}