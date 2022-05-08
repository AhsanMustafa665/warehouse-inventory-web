import React from 'react';
import Banner from '../Banner/Banner';
import Furnitures from '../Furnitures/Furnitures';
import img1 from '../../../Assests/images/College/i-1.jpg';
import img2 from '../../../Assests/images/College/i-2.jpg';
import img3 from '../../../Assests/images/College/i-3.jpg';
import img4 from '../../../Assests/images/College/i-4.jpg';
import img5 from '../../../Assests/images/College/i-5.jpg';
import img6 from '../../../Assests/images/College/i-6.jpg';
import img7 from '../../../Assests/images/College/i-7.jpg';
import img8 from '../../../Assests/images/College/i-8.jpg';
import img9 from '../../../Assests/images/College/i-9.jpg';
import img10 from '../../../Assests/images/College/i-10.jpg';
import img11 from '../../../Assests/images/College/i-11.jpg';
import img12 from '../../../Assests/images/College/i-12.jpg';
import img13 from '../../../Assests/images/College/i-13.jpg';
import blog1 from '../../../Assests/images/Blogs/blog-1.jpg';
import blog2 from '../../../Assests/images/Blogs/blog-2.jpg';
import blog3 from '../../../Assests/images/Blogs/blog-3.jpg';
import './Home.css';


const Home = () => {
    
    return (
    <>
        <div>
                <Banner></Banner>
                <h1 style={{color:'rgb(122, 15, 15)',fontWeight: '900',fontSize: '2.2rem',letterSpacing: '1px'}} className='text-center mt-5'>Featured Items</h1>
            <div   id='featured' className="container college">
        <div className="row mt-5">
            <div className="col-4">
                <img className="img-fluid mb-4" src={img1} alt=""/>
                            <div className='row'>
                                <img className="img-fluid mb-4 col-6" src={img2} alt="" />
                                
                            <img className="img-fluid mb-4 h-25 col-6" src={img6} alt=""/>
                            </div>
                            <img  className='img-fluid mb-4' src={img12} alt="" />
                            <img className='img-fluid mb-4' src={img13} alt="" />
                        </div>
                        
            <div className="col-4">
                <img className="img-fluid mb-4" src={img3} alt=""/>
                <img className="img-fluid mb-4" src={img4} alt=""/>
                <img className="img-fluid mb-4" src={img5} alt=""/>
                
            </div>
            <div className="col-4">
                <img className="img-fluid mb-4" src={img7} alt=""/>
                <img className="img-fluid mb-4" src={img8} alt=""/>
                <img className="img-fluid mb-4" src={img9} alt=""/>
                <div className="row">
                    <div className="col-6">
                        <img className="img-fluid mb-4" src={img10} alt=""/>
                    </div>
                    <div className="col-6"><img className="img-fluid mb-4" src={img11} alt=""/>
                    </div>
                </div>

            </div>

        </div>
        </div>
    </div>
            <Furnitures></Furnitures>
            <h1 style={{color:'rgb(122, 15, 15)',fontWeight: '900',fontSize: '2.2rem',letterSpacing: '1px'}} className='text-center mt-5'>Lastest Blogs</h1>
            <div style={{display:'flex'}} className='container'>
                <div>
                    <img style={{width:'100%',borderRadius:'20px'}} src={blog1} alt="" />
                </div>
                <div className='ms-5 mt-5' style={{textAlign:'left'}}>
                    <h5>DEMO || APRIL 18,2022</h5>
                    <p>A seat, especially for one person, usually having four legs for support and a rest for the back and often having rests for the arms.Something that serves as a chair or supports like a chair.The two men clasped hands to make a chair for their injured companion.A seat of office or authority.</p>
                </div>
            </div>
            
            <div  style={{display:'flex'}} className='container'>
                <div  className='me-5 mt-5' style={{textAlign:'left'}}>
                    <h5>DEMO || MARCH 1,2022</h5>
                    <p>Family Owned And Operated. High-End Furniture Store. White Gloves Delivery USA. Free design with purchase. Highlights: Over 30 Years Of Experience, A Family Owned And Operated Business, Offering A Relaxed, Warm And Friendly Environment.</p>
                </div>
                <div>
                    <img style={{width:'100%',borderRadius:'20px'}} src={blog2} alt="" />
                </div>
            </div>

            <div style={{display:'flex'}} className='container'>
                <div>
                    <img style={{width:'100%',borderRadius:'20px'}} src={blog3} alt="" />
                </div>
                <div className='ms-5 mt-5' style={{textAlign:'left'}}>
                    <h5>DEMO || JANUARY 28,2022</h5>
                    <p>A beach chair is a simple chair with a folding frame, and a piece of canvas as the seat and back. Beach chairs are usually used on the beach, on a ship, or in the yard. [US]regional note: in BRIT, use deckchair. People sprawl in beach chairs or sit under umbrellas.</p>
                </div>
            </div>
                
                
            
            
        
        </>
                        
    );
};

export default Home;