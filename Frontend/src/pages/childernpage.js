
import Footer from "../components/footer.js";
import Fullporducts from "../components/products.js";

const Childrenpage = () => {
  return (
    <div>
     
      <h1 style={{ textAlign: "center", margin: "15px" }}>
        product for childern
      </h1>
      <Fullporducts category="children" />
      <Footer />
    </div>
  );
};
export default Childrenpage;
