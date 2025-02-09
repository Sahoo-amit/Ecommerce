import { useEffect } from "react";
import { removeToken,removeUser } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(removeToken());
        dispatch(removeUser());
        toast.success("Logout successful");
        navigate('/login')
    },[dispatch,navigate])
  return null;
}

export default Logout