import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [user, setUser] = useState({name:'', email:'', password:''})
  const navigate = useNavigate()
  
  const handleChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const res = await fetch("http://localhost:3000/users/signup",{
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(user)
    })
    if(res.ok){
      toast.success("Registration successful")
      navigate('/login')
    }else{
      toast.error("Registration failed")
    }
  }

  return (
    <div>
      <div>
        <h1>Signup</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={user.name}
              onChange={handleChange}
            />
          </div>
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
          <button type="submit">Register</button>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default Signup