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
    <>
      <div style={{ display: "flex",alignItems:"center",gap:"20px",flexWrap:"wrap" ,margin:"25px",textAlign:"center"}}>
        {Moviedata.map((e, index) => (
          <>
            <div>
              {" "}
              <img src={e.Poster} alt={e.Title} />
              <p>{e.Title}</p>
              <p>{e.Year}</p>
              <p>{e.Type}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Nav;
