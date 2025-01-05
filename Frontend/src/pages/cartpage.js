import NavbarScroll from '../components/navbar.js';
import Footer from '../components/footer.js';
import { useState } from 'react';

const CartPage = () => {
    const [count, setCount] = useState(1);

    return (
        <div>
            <NavbarScroll />
            <h1 style={{ textAlign: 'center', margin: '15px' }}>Cart Page</h1>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <label>Order {count} items</label>
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
