import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const role = useSelector((state)=>state.auth.role)
    const token = useSelector((state)=>state.auth.token)
    
  return (
    <div className="bg-red-500 w-full h-20 flex justify-between ">
      <div>
        <h1>E commerce</h1>
      </div>
      <ul className="flex space-x-10">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/order">Order</NavLink>
        </li>
        {role === "admin" && (
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        )}
      </ul>
      <ul className="flex space-x-10">
        <li>
          <NavLink to='/cart'>
            <FaShoppingCart />
          </NavLink>
        </li>
        {token ? (
          <>
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar