import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import axios from "axios";
// http://www.omdbapi.com/?t=Game of Thrones&Season=1

const Nav = () => {
  const [Moviedata, setMoviedata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=43863da1&s=Batman`)
      .then((response) => {
        console.log(response);
        setMoviedata(response.data.Search);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }, []);

  console.log("Moviedata", Moviedata);

  return (
    <nav>
      <div className="">
        {Moviedata.map((e, index) => (
          <>
            <img src={e.Poster} alt={e.Title}/>
            <div>{e.Title}</div>
            <div>{e.Year}</div>
            <div>{e.Type}</div>
          </>
        ))}

      </div>
    </nav>
  );
};

export default Nav;
