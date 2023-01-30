import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Data.css"

const Data = () => {
  const navigate = useNavigate()

  const RouteChange = () =>{
    navigate("/")
  }
  return (
    <>
    <div className='container'>
      <button className='button' onClick={RouteChange}>Cancel</button>
      <button className='button2'>send</button>

    </div>
    <div className='first__Container'>
      <div >
        <h6 className='star1'>COUNTRY<h6 className='star'>*</h6></h6>
        <select className='first__input'>
             <option value="option1"> Select Country </option>
            <option value="option2"> India</option>
            <option value="option3">America</option>
        </select>  
      </div>

      <div className='second__container' >
        <h6>USER TYPE</h6>
        <input type="radio" ></input>Driver 
        <input type="radio" ></input>Broker & Driver
      
      </div>
      
      <div className="line">
        <h5>Personal Details</h5>
      <hr
        style={{
            color: " #109887",
            backgroundColor: " #109887",
            height: 3,
            width:1150
        }}
      />
      </div>

      <div className='line1'>
        <input className='drag'></input>
        <div className='name__personal'>
        <h6 className='star1'>FIRST NAME <h6 className='star'>*</h6></h6>
        <input className='input__personal'></input>
        </div>
      </div>

      <div className='line2'>
        <h6 className='star1'>MIDDLE NAME </h6>
        <input className='input__personal'></input>
      </div>
      <div className='line3'>
        <h6 className='star1'>LAST NAME <h6 className='star'>*</h6></h6>
        <input className='input__personal3'></input>
      </div>
      <div className='line4'>
        <h6 className='star1'>LAST NAME <h6 className='star'>*</h6></h6>
        <input className='input__personal4'></input>
      </div>
    <div>

    </div>
      
        
    </div>
    </>
  )
}

export default Data