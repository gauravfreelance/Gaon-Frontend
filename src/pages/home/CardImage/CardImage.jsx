import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ImageCard1, ImageCard2 } from '../../../public/Images'
import "./cardimage.scss"
import { SolarBuzz2,SolarBuzz1, SolarBuzz, SolarHelp } from "../../../public/Images";
import { useEffect } from 'react';
import { fetchJSON } from '../../../api';
import { useState } from 'react';

const cardData = [
  {
    image: ImageCard1,
    title: 'The solar buzz in Bundelkhand is helping.',
    content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
  },
  {
    image: ImageCard2,
    title: 'The solar buzz in Bundelkhand is helping.',
    content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
  },
    {
      image: SolarHelp,
      title: 'The solar buzz in Bundelkhand is helping.',
      content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
    },
    {
      image: SolarBuzz,
      title: 'The solar buzz in Bundelkhand is helping.',
      content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
    },
    {
      image: SolarBuzz1,
      title: 'The solar buzz in Bundelkhand is helping.',
      content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
    },
    {
      image: SolarBuzz2,
      title: 'The solar buzz in Bundelkhand is helping.',
      content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
    },
    
    {
      image: SolarBuzz2,
      title: 'The solar buzz in Bundelkhand is helping.',
      content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
    },
    // Add more card data here
  ];
const CardImage = () => {
  const [advertisment,setAdvertisment]=useState([])
  const carouselStyle = {
    width: "650px", // Set the desired width of the carousel
    height: "650px", // Set the desired height of the carousel
  };

  useEffect(() => {
		fetchJSON("advertiments?populate=*", "GET", "").then((data) => {
			// console.log(data.data[0].attributes.image.data[0].attributes.url);
			// console.log(data);
			setAdvertisment(data.data);
		});
	}, []);
  const responsive = {
    
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      
      items: 1
  
    },
    desktop: {
      
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide:2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
    
    const settings = {
      dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      // Define your settings here
      
      
      autoplay: true,
      autoplaySpeed: 2000,
    };
  return (
    <div>
      <Carousel 
      draggable={true}
      // infinite= {true}
      customTransition="all .5"
      transitionDuration={500}
      fade={true}
      // containerClass="card-container"
      arrows={true}
      style={carouselStyle}
      responsive={responsive}
      autoplay= {true}
      autoplaySpeed= {500}
      //  sliderClass="card"
      >
        {advertisment.map((card, index) => (
          <div className='image_container' key={index}>
          <div className='image_box'>
              <img src={`http://45.126.126.209:1337${card.attributes.image.data[0].attributes.url}`}/>
          </div>
          {/* <div className='image_box'>
              <img src={ImageCard2}/>
          </div> */}
      </div>
))}
      </Carousel>

      
    </div>
    
  )
}

export default CardImage