
import Footer from "../components/footer.js";
import Fullporducts from "../components/products.js";

const Shoesbagspage = () => {
  return (
    <div>
    
      <h1 style={{ textAlign: "center", margin: "15px" }}>
				shoes && bags 
			</h1>
      <Fullporducts category="shoes-bags" />
      <Footer />
    </div>
  );
};
export default Shoesbagspage;
