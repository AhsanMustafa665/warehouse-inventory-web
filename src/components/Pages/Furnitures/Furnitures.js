import React, { useEffect, useState } from 'react';
import Furniture from '../Furniture/Furniture';
import './Furnitures.css';

const Furnitures = () => {

    const [shows, setShows] = useState([]);
console.log(shows);
    useEffect( ()=>{
        fetch('furniture.json')
        .then(res => res.json())
        .then(data => setShows(data));
    }, [])
    
    return (
        <div id="furniture" className='container'>
            <div className="row">
            <h1 style={{color:'rgb(122, 15, 15)',fontWeight: '900',fontSize: '2.2rem',letterSpacing: '1px'}} className='text-center mt-5'>Our collection of furniture's</h1>
            <div className="furnitures-container">
            {
                shows.map(show => <Furniture
                    key={show.id}
                    show={show}
                >
                </Furniture>)
            }
            </div>
            </div>
        </div>
    );
};

export default Furnitures;