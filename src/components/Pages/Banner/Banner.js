
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Assests/images/Banner/banner1.png"
import banner2 from "../../../Assests/images/Banner/banner2.png"
import banner3 from "../../../Assests/images/Banner/banner3.png"

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'rgb(122, 15, 15)',fontSize:'30px',fontFamily:'cursive',fontWeight:'bolder'}}>Home Collection Sofa.</h3>
          <p style={{color:'black',fontWeight:'bolder'}}>The section sofa is a multi-piece sofa. Common number of pieces are 3 and 5. It can be arranged in a number of configurations.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{color:'rgb(122, 15, 15)',fontSize:'30px',fontFamily:'cursive',fontWeight:'bolder'}}>Full Set Modern Leather Sectional Sofa Set</h3>
          <p style={{color:'black',fontWeight:'bolder'}}>It usually includes at least two pieces that can be arranged in multiple configurations. A sectional sofa often has the option.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3  style={{color:'rgb(122, 15, 15)',fontSize:'30px',fontFamily:'cursive',fontWeight:'bolder'}}>Foraml and goorgeius Sofa set.</h3>
          <p style={{color:'black',fontWeight:'bolder'}}>
          Find modern and trendy sofa set living room to make your home look chic and elegant, only. Beautifully crafted sofa set living room available at extremely low prices. Production Monitoring. Trade Assurance. Logistics Service.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;