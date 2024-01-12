import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";



const Header = () => {
  const navigate= useNavigate();
  const user=useSelector((store)=>store.user);
  const dispatch=useDispatch();

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };

  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        
        navigate("/Browse");
        // navigate browse here only

      } else {
       //remove user
       dispatch(removeUser());
       navigate("/");

      //  navigate homepahe here only
    
      }
    });

    return ()=>unsubscribe();
     
  }, []);
  return (
    <div className=" absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src={LOGO}
        alt="logo"
      />
      { user && <div className="flex p-1">
        <img
          className="w-6 h-5 mt-2 mr-2"
          src={user?.photoURL}
          alt="UseIcon"
        />
        <button onClick={handelSignOut} className="mb-3 font-bold text-white">
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
