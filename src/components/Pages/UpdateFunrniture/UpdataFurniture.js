import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdataFurniture = () => {
    const { furnitureId } = useParams();
    return (
        <div>
        <div>
                <h2>Update Furniture {furnitureId}</h2>
            <div className='text-center'></div>
            <Link to='/updateOne'>
                    <button  style={{backgroundColor: 'darkslategray' ,color:'white'}} className=''>Update this item</button>
            </Link>
            </div>
    
     </div>  
        
    );
};

export default UpdataFurniture;