import React, { useEffect, useState } from 'react'
import All from '../components/All'
import axios from "axios"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Home = () => {

  const Key = "51cc7f5f459038d8f6fd27150449d6a1"
  const [data, setData] = useState([])
  let soz = useSelector(state => state.kinoNomi);


  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${soz}?api_key=${Key}&language=en-US&page=1`,
      method: "GET"
    })
      .then((v) => {
        console.log(soz);
        setData(v.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [soz])


  let navigate = useNavigate()
  const GoInfo = (v) => {
    navigate("infomovie",
      {
        state: v
      })
  }


  return (
    <All>
      <div>
        <button>tekshirish</button>
        <div className="container">
          <div className="row">
            {
              (data.length > 0) ? (
                data.map((v, i) => {
                  return <div className='col-lg-2 col-md-4 col-sm-6' key={i} onClick={() => GoInfo(v)}>
                    <div className="card">
                      <img src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`} alt="" />
                      <p>{v.id}</p>
                      <h1>{v.title}</h1>
                    </div>
                  </div>
                })
              ) : (
                <h1>Error</h1>
              )
            }
          </div>
        </div>



      </div>
    </All>
  )
}

export default Home