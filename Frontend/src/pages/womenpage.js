
import Footer from "../components/footer.js";
import Fullporducts from "../components/products.js";

const Womenpage = () => {
  return (
    <div>
   
      <h1 style={{ textAlign: "center", margin: "15px" }}>
        Products for Women
      </h1>
      <Fullporducts category="women" />
      <Footer />
    </div>
  );
};

export default Womenpage;
