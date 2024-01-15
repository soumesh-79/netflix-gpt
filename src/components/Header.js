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
import { toggleGptSearchView } from "../utils/gptSlice";



const Header = () => {
  const navigate= useNavigate();
  const user=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

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

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())
  }
  return (
    <div className=" absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src={LOGO}
        alt="logo"
      />
      { user && <div className="flex p-1">
        {showGptSearch && <select className=" bg-slate-400">
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </select>}
        <button className="mx-2 py-2 px-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch?"Homeoage":"GPT Search"}</button>
        <img
          className="w-7 h-7 mt-2 mr-2"
          src={user?.photoURL}
          alt="UseIcon"
        />
        <button onClick={handelSignOut} className=" font-bold text-white bg-red-700 px-3 mt-1 py-1 rounded-lg">
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
