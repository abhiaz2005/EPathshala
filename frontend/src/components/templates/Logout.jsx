import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
    const [authUser,setAuthUser] = useAuth() ;
    const handleLogout = () =>{
       try {
        setAuthUser({
            ...authUser,
            user:null}) ;
            toast.success("Logout successfully",{
              position:"top-center",
            })
            document.getElementById("my_modal_3").close() ;
            setTimeout(()=>{
              window.location.reload() ;
              localStorage.removeItem("users") ;
          },500)
       } catch (error) {
            toast.error("Error: "+error) ;
       }
    }
  return (
    <div>
        <button onClick={handleLogout} className='px-2 py-1 text-sm bg-red-500 rounded-lg text-white cursor-pointer ml-2'>Logout</button>
    </div>
  )
}

export default Logout