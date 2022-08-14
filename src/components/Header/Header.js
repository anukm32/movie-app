import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";
import { FaSistrix} from "react-icons/fa";


const Header = () => {
  const dispatch=useDispatch();
  const[term,setTerm]=useState("")
  const submitHandler=(e)=>{
e.preventDefault();
// console.log(term);
dispatch(fetchAsyncMovies(term));
dispatch(fetchAsyncShows(term));
  }
  return (
    <div className="header">
     
        <div className="logo"> <Link to="/">Movie App   </Link></div>
   <div className="search-bar">
<form onSubmit={submitHandler}>
  <input type="text" value={term} placeholder="Search movies or shows" onChange={(e)=>setTerm(e.target.value)}/>
  <button type="submit"><FaSistrix/>
    {/* <i className="fa fa-search"></i> */}
  </button>
</form>
   </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;