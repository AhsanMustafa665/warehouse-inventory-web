import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Furniture.css';

const Furniture = ({show}) => {
    const {name, img, description, price,quality,supplierName} = show;
    // const navigate = useNavigate();

    // const navigateToServiceDetail = id => {
    //     navigate(`/furniture/${id}`);
    // }
    
    return (
        <div className='singal-furniture'>
            <img style={{borderRadius:'20px'}} className='w-100' src={img} alt="" />
            <h2 style={{color:'rgb(122, 15, 15)'}}>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <h5>Supplier name: {supplierName}</h5>
            <h6>Quantity:{quality}pcs</h6>
            {/* <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button> */}
        </div>
    );
};

export default Furniture;