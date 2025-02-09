import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = () => {
  const [products, setProducts] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  
  const getProduct = async()=>{
    const res = await fetch('http://localhost:3000/products',{
      method:'GET',
      headers:{"content-type": "application/json"},
    })
    const data = await res.json();
    setProducts(data);
  }

  useEffect(()=>{
    getProduct();
  },[])

  const handleAddToCart = async (product) => {
    if (!token) {
      toast.error("Please log in to add items to your cart.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1,
        }),
      });

      const data = await res.json();
      dispatch(addToCart(data));
      toast.success("Item added to cart successfully.");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };


  return (
    <div>
      <div>
        <h1>Products</h1>
      </div>
      <ul>
        {
          products.map((product)=>{
            return(
              <li key={product._id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Product