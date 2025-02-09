import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeToken, storeUser } from "../redux/slices/AuthSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    if (res.ok) {
      toast.success("Login successful");
      navigate("/");
      const data = await res.json();
      dispatch(storeToken(data.token));
      dispatch(storeUser(data.userExist.role));
      console.log(data);
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <div>
      <div>
        <h1>Signup</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="GKd2H@example.com"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="....."
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
