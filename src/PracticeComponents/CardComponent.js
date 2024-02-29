import React from 'react'


function CardComponentDemo(props) {
    
    return (
       
            <div className="card" style={{ width: '200px' }}>
                <img className='card-img-top' height="160" src={props.product.image} alt="#" />
                <div className="card-body">
                    <p>{props.product.title}</p>
                </div>
            </div>

    )
}

export default CardComponentDemo;
