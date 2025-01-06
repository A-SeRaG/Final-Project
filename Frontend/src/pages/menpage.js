import NavbarScroll from "../components/navbar.js";
import Footer from "../components/footer.js";
import Fullporducts from "../components/products.js";

const Menpage = () => {
  return (
    <div>
      <NavbarScroll />
      <h1 style={{ textAlign: "center", margin: "15px" }}>
        Poduct For Men
      </h1>
      <Fullporducts category="men" />
      <Footer />
    </div>
  );
};
export default Menpage;
