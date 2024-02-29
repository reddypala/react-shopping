import React from 'react'

export default function Card(props)
{
    return(
        <div id='card'>
            <img src={props.img} alt="img" />
            <div className="info">
                <h2>{props.name}</h2>
                <p>work: {props.work}</p>
                <p>Hobby: {props.hobby}</p>
                <p>From: {props.origin}</p>
            </div>
        </div>
    )
}