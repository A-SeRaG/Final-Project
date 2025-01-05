import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {Container} from "react-bootstrap";
const Erormessage = () =>{
return(
<Container>
<div className='link-slide'>
       <ul className='d-flex' style={{listStyle:'none'}}>
         <li > <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
         <span>/</span>
         <li> <Link to="*" style={{ textDecoration: 'none', color: 'inherit' }}>Erormessage</Link></li>
       </ul>
</div>   
<div style={{marginBottom:'var(--main-margin-top)', marginTop:'var(--main-margin-top)', textAlign:'center'}}>
<h1 style={{fontSize:'100px'}}>404 Not Found</h1>
<p>your visited page not found. You may go home page.</p>
<Link to="/home">
<Button style={{backgroundColor:'var(--second-color)' ,width:'20%'}}>Go home</Button>
</Link>
</div>
</Container>
);
}
export default Erormessage;