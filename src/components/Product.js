
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

const Product = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const { product } = props;

    const addToCart = (event, product) => {
        event.preventDefault();
        let _cart = {...cart}; // { items: {}}
        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
        //
        // const cart = {
        //     items: {
        //         '608c2960e165f6137f02b552': 2,
        //         '608c28e8e165f6137f02b550': 3
        //     },
        //     totalItems: 5
        // }

    }

    return (
      <>  <Link to={"/products"}>
        <div class="grid gap-20 grid-cols- grid-rows-">
           <div>
            <img src='/images/doublechoc.png' alt="pizza" />
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">Double Chocklet Cake</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Medium</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="bg-green-200 py-1 rounded-full text-sm px-4">₹ { 650 }</span>
                <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'bg-green-500': 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED': ''}</button>
            </div>
            </div>
            
           
            
           <div>
            <img src='/images/stra.png' alt="pizza" />
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">Straberry Pastry</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Medium</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="bg-green-200 py-1 rounded-full text-sm px-4">₹ { 80 }</span>
                <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'bg-green-500': 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED': ''}</button>
            </div>
            </div>

            <div>
            <img src='/images/garlic.png' alt="pizza" />
            <div className="text-center">
                <h2 className="text-lg font-bold py-2">Garlic Bread</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Medium</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span>₹ { 120 }</span>
                <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'bg-green-500': 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED': ''}</button>
            </div>
            </div>
        </div>
        
        </Link>
        </>
    )
}

export default Product;
