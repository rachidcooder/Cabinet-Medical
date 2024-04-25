import { FaClinicMedical } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import { useState ,useEffect} from "react";

const NavBar =()=>{
const[user,setUser]=useState("");
    const navigate =useNavigate();

    useEffect(()=>{
        const cookieValue = Cookies.get('user');
       cookieValue ? setUser(JSON.parse(cookieValue) ): setUser(null);
        
    },[]);
    
    const goToProfile=()=>{
        const user= Cookies.get('user');
        if(user){
            navigate("/profile");
        }else{
            navigate("/login");
        }
    }

    const handleShowNotification = () => {
        if (Notification.permission === 'granted') {
          new Notification('Hello', { body: 'This is a notification!' });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              new Notification('Hello', { body: 'This is a notification!' });
            }
          });
        }
      };


    return(
        <div className=" max-w-[1640px] fixed top-0 w-full flex justify-between  bg-white text-sky-700  p-4">
            <div className=" flex space-x-2">
            <FaClinicMedical size={30} className=" text-sky-700"/>
            <h2 className=" text-2xl font-bold">MasaHHati</h2>
            </div>

            <div className=" flex space-x-10 font-semibold  text-sky-600 ">
                <a href="#home" className="hover:text-sky-700">Home</a>
                <a href="#departments" className="hover:text-sky-700">Departements</a>
                <h1 className="hover:text-sky-700" onClick={()=>{goToProfile()}}>Profile</h1>
                <a href="#about" className="hover:text-sky-700">About us</a>
                <IoIosNotifications onClick={()=>{handleShowNotification()}} size={25}  className="hover:text-sky-700"/>

            </div>
           
        </div>
    )
}

export default NavBar