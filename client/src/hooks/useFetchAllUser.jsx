import { useState, useContext, useEffect } from "react";
import userService from "../services/userService";
import { AuthContext } from "../Context/AuthContext";
const useFetchAllUser=()=>{
    const [user,setUser]=useState([]);
    const { state } = useContext(AuthContext)
    useEffect(() => {
      fetchUser();
    }, [state]);
    const setUserData=(newUserData)=>setUser(newUserData);
    const fetchUser= async ()=>{
        try{
            const userResponse = await userService.getAll();
            // console.log("user rsponde ne may ba : ",userResponse)
            const userData = userResponse.data.data;
            setUser(userData);
//   console.log("user ben fetch : ", user)
            
        } catch(error){
            console.log(error.response.data);
        }

    }
    return {user,setUserData}
}
export default useFetchAllUser;