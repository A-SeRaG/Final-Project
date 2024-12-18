import React from 'react';
import { Container, Row, Col,Form } from 'react-bootstrap'; // Import necessary components
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from 'react-bootstrap';
import  { useState } from 'react';


const Contact = () => {
        const [text, setText] = useState('');
      
        const handleChange = (e) => {
          setText(e.target.value);
        
}
  return (
    <Container className='contact'>
      {/* Navigation link */}
    <div className='link-slide'> <ul className='d-flex ' style={{listStyle:'none'}}>
        <li > <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
        <span>/</span>
        <li> <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
      </ul>
      </div> 
      
      <Row>
        {/* Image Column */}
        <Col md={4}> 
        <div className='text1'>
         <h3><FontAwesomeIcon icon="fa-solid fa-phone" />  Call To Us</h3>
         <span>We are available 24/7, 7 days a week.</span>
         <pan>Phone: +8801611112222</pan>
        </div>
        <div className='sperate'></div>
        <div className='text2'>
        <h3> <FontAwesomeIcon icon="fa-regular fa-envelope" /> Write To US</h3>
       <p> Fill out our form and we will contact you within 24 hours.</p>  
         <span>Emails: customer@exclusive.com</span>
         <span>Emails: support@exclusive.com</span>
        </div>
        </Col>
        
        {/* Content Column */}
        <Col md={6}>
       <Row>
        <Col xs={6} md={4}>
           <Form.Control style={{backgroundColor:' rgb(247, 239, 239)' }} placeholder="Your name "  />
        </Col>
        <Col xs={6} md={4}>
          <Form.Control style={{backgroundColor:' rgb(247, 239, 239)' }} placeholder="Your Email" />
        </Col>
        <Col xs={6} md={4}>
        <Form.Control style={{backgroundColor:' rgb(247, 239, 239)' }} placeholder="Your phone " />
        </Col>
      </Row>
   
 <Row>

 <Form style={{marginTop:'50px'}}>
      <Col>
     
      <input
      placeholder="Write your message here "
        id="textInput"
        type="text"
        value={text}
        onChange={handleChange}
        style={{
        backgroundColor: ' rgb(247, 239, 239)  ',
        marginTop:'20px',
        marginBottom:'20px',
        width: '600px', 
          height:'200px',// Large width
          padding: '20px', // Padding for better user experience
          fontSize: '16px', // Font size for visibility
        }}/>
      </Col> 
        <Button style={{backgroundColor:'var(--main-color)' ,width:'50%'}}>send message</Button>
   </Form>
</Row>
</Col>

</Row>
      
    </Container>
  );
}


export default Contact;