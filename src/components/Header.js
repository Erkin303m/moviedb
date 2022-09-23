import React from 'react'
import { useDispatch } from 'react-redux'
import "./style.css"


const Header = () => {
  const dispatch = useDispatch();

  const Tanlash = (v) => {
    // localStorage.setItem('kino', v);
    const action = { type: "ADD", payload: v }
    dispatch(action)
  }

  return (
    <div className='bg-primary text-light header'>
      <h1>Header qismi</h1>

      <select name="kinolar" id="kino" className='selecting' onClick={(a) => Tanlash(a.target.value)}>
        <option value="popular">Popular</option>
        <option value="top_rated" >top_rated</option>
        <option value="now_playing" >Now playing</option>
      </select>
    </div>
  )
}

export default Header