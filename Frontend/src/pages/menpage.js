import NavbarScroll from '../components/navbar.js';
import Footer from '../components/footer.js';
import Fullporducts from '../components/products.js';

const Menpage =()=>{
return(
<div>

<NavbarScroll/>
<h1 style={{textAlign:'center' , margin:'15px'}}> product for men  </h1>
<Fullporducts/>
<Footer/>


</div>

);
}
export default Menpage;