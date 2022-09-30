import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import axios from "axios"
// http://www.omdbapi.com/?t=Game of Thrones&Season=1

const Nav = () => {
  const [Moviedata,setMoviedata] = useState([])
useEffect(()=>{
  axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=43863da1&type=movies`).then((response)=>{
    console.log(response)
    setMoviedata(response.data)
   }).catch((err)=>{
    console.log(err)
    return err
   })
},[])

   console.log("Moviedata",Moviedata)

  return (
    <nav>
      <div className="">
        <img src={Moviedata.Poster}/>
     <h2> {Moviedata.Title}</h2>

        {/* {Object.entries(requests).map(([key, { title, url }]) => {
          // `console.log("title",title)`
          <h2
            key={key}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>;
        })} */}
      </div>
    </nav>
  );
};

export default Nav;
