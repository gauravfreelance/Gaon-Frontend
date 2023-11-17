import React from "react";
import { LifeOne, LifeTwo, LifeThree } from "../../../public/Images";
import "./lifehack.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LifeCard from "./LifeCard";
import { useEffect } from "react";
import { fetchJSON } from "../../../api";
import { useState } from "react";
import axios from "axios";

const LifeHack = () => {
  const [lifeHack, setLifeHack] = useState([]);

  const Auth = {
    headers: {
      Authorization:
        "Bearer 944023dedb88e40789ace68281cfae240e970cfec6e212af97a1001e37ec248836c2284704da7db65173684f709e191a01d89007405f51a9833a5fbc688a3f91fdc7cff7edeaef15d742980f97839ac2cc70eafef74446cdfe53eaa1b990b5797a746b4ab347729bbe71416771ad5be9071ab6c00358a6642e0f3d95c88c191b",
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `http://45.126.126.209:1337/api/lives?populate=*`,
        Auth
      );
      setLifeHack(data.data);
    } catch {}
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div className="life_container">
      <h2>लाइफ़ हैक्स</h2>

      <Carousel
        draggable={true}
        // infinite= {true}
        customTransition="all .5"
        transitionDuration={500}
        fade={true}
        // containerClass="card-container"
        arrows={true}
        responsive={responsive}
        autoplay={true}
        autoplaySpeed={500}
      >
        {lifeHack?.map((i, index) => (
          <div className="card" key={index}>
            <iframe
              src={i.attributes?.link}
              title="video2"
              allowFullScreen
              className="card-image"
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LifeHack;
