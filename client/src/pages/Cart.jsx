import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { removeFromCart } from "../redux/slices/CartSlice";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch()
  console.log(token)

  const getOrder = async () => {
    if (!token) {
      toast.error("Please log in to view your items.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await res.json();
      setCartItems(data.products || []);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  const removeItems = async(id)=>{
    console.log(id)
    try {
        const res = await fetch(`http://localhost:3000/cart/${id}`,{
            method:'DELETE',
            headers:{
                "Content-Type": "application/json",
                Authorization: `${token}`,
            }
        })
        const data = await res.json();
        dispatch(removeFromCart(id))
        getOrder()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <li key={index}>
              <p>
                <strong>{item.product.name}</strong>
              </p>
              <p>Price: ${item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
              <img
                src={`http://localhost:3000/${item.product.images[0]}`}
                alt={item.product.name}
                width="100"
              />
              <button>Place Order</button>
              <button onClick={()=>removeItems(item._id)}>Remove Item</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
