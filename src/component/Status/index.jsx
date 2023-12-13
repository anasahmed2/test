import React from 'react'
import "./style.css"
import IconImg from "../../assets/find-great-teammates.webp"

function StatusBand({image,heading }) {
    return (
        <div className='statusBandContaier'>
            <div className='StatusBandIcon'>
                <img src={image} alt="" />
            </div>
            <div className='StatusBandHeading'>
                <h1>{heading}</h1>
            </div>
        </div>
    )
}


function Status({ heading, detail, btnValue, image }) {
    return (
        <div className='statusContaier'>
            <div className='statusImg'>
                <img src={image} alt="" />
            </div>
            <div className='statusHead'>
                <h1>{heading}</h1>
            </div>
            <div className='statusHead'>
                <p>{detail}</p>
            </div>
            <div className='statusHead'>
                <button className='StatusBtn'>{btnValue}</button>
            </div>

        </div>
    )
}


export { Status, StatusBand }