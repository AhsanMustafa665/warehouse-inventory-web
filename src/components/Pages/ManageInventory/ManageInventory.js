import React, { useEffect, useState } from 'react';
import Furniture from '../Furniture/Furniture';
import './ManageInventory.css';

const ManageInventory = () => {
    const [shows, setShows] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 5);
                setPageCount(pages);
        })
    }, [])
    
    useEffect( ()=>{
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setShows(data));
    }, [page, size])
    return (
        
        <div id="collections"  className='container'>
            <div className="row">
            <h1 style={{color:'rgb(122, 15, 15)',fontWeight: '900',fontSize: '2.2rem',letterSpacing: '1px'}} className='text-center mt-5'>Our collection of furniture's</h1>
            <div className="furnitures-container">
            {
                shows.map(show => <Furniture
                    key={show._id}
                    show={show}
                >
                </Furniture>)
                    }
                   
            </div>
            </div>
            <div className='mt-5 mb-5 pagination'>
                        {
                            [...Array(pageCount).keys()] 
                        .map(number => <button className={page===number?'selected':''} onClick={()=>setPage(number)}>{number}</button>)
                }
                <select onChange={(event)=>setSize (event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                    </div>
        </div>
    );
};

export default ManageInventory;