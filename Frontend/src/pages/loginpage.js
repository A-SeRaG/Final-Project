import Footer from "../components/footer.js";
import Login from "./loginpage/login.js";

const Loginpage = ({ setIsLoggedIn }) => {
    return (
        <div>
            <Login setIsLoggedIn={setIsLoggedIn} />
            <Footer />
        </div>
    );
};

export default Loginpage;
