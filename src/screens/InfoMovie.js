import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios"
import { useSelector } from 'react-redux';



const InfoMovie = () => {

  const loaction = useLocation();
  console.log(loaction.state);

  const [data, setdata] = useState(loaction.state)
  const [kinoTrailerId, setKinoTrailerId] = useState(0)
  const Key = "51cc7f5f459038d8f6fd27150449d6a1"
  let soz = useSelector(state => state.kinoNomi);

  //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=${Key}&language=en-US`,
      method: "GET"
    })
      .then((v) => {
        console.log(v);
        setKinoTrailerId(v.data.results[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div>
      <h1>{data.title}</h1>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />

      </div>
    </div>



  )
}

export default InfoMovie