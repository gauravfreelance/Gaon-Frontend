import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from './card';
import image from '../../assets/card.png';
import { SolarBuzz2,SolarBuzz1, SolarBuzz, SolarHelp } from "../../public/Images";
import './card.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react"


const CardList = (props) => {
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  const Auth = {
    headers: {
      Authorization:
        "Bearer 944023dedb88e40789ace68281cfae240e970cfec6e212af97a1001e37ec248836c2284704da7db65173684f709e191a01d89007405f51a9833a5fbc688a3f91fdc7cff7edeaef15d742980f97839ac2cc70eafef74446cdfe53eaa1b990b5797a746b4ab347729bbe71416771ad5be9071ab6c00358a6642e0f3d95c88c191b",
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `http://45.126.126.209:1337/api/${props.apiLink}?populate=*&`,
        Auth
      );
      setData(data.data);
      console.log(data)
    } catch { }
  };
  useEffect(() => {
    fetchHandler();
  }, []);
  const responsive = {
    
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5

  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide:3
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
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    // Define your settings here
    
    
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div  className='container_cardlist'>
      <Carousel 
      draggable={true}
      // infinite= {true}
      customTransition="all .5"
      transitionDuration={500}
      fade={true}
      // containerClass="card-container"
      arrows={true}
      
      responsive={responsive}
      autoplay= {true}
      autoplaySpeed= {500}
      //  sliderClass="card"
      >
      {data?.map((i, index) => (
        // <Card key={index} {...card} />
        <div className="card" key={index}>
          <img
            src={`http://45.126.126.209:1337${i?.attributes?.images?.data?.[0]?.attributes?.url}`}
            alt="Card Image"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-heading">{i?.attributes?.Title}</h2>
            <p className="card-description">
              <span style={{ color: "#0CC5FF" }} onClick={() => navigate(`${props.naviLink}/${i?.id}`)}> Read More</span>
              {/* <span style={{ color: "#0CC5FF" }} onClick={() => navigate(`blogs/6`)}> Read More</span> */}
            </p>
          </div>
        </div>
      ))}
      {/* <div className="card">
      <img src={SolarHelp} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-heading">
          The solar buzz in Bundelkhand is helping.
        </h2>
        <p className="card-description">
          Filler text is text that shares some characteristics of a real
          otherwise generated. It may be used ...{" "}
          <span style={{ color: "#0CC5FF" }}> Read More</span>
        </p>
      </div>
    </div> */}
      </Carousel>
      <button className='btn' onClick={()=> navigate(`/${props.route}`)}>View All</button>
    </div>
  );
};

export default CardList;
