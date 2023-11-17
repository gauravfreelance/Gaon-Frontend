import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import MobileHeader from "./Header/header";
import Header from "../../components/header";
import HomeImage from "../../components/homeImage";
import ImageBox from "../../components/imageBox";
import SolarBuzz from "./SolarBuzz/SolarBuzz";
import SolarHelp from "./SolarHelp/SolarHelp";
import LifeHack from "./LifeHack/LifeHack";
import SocialLife from "../../assets/imageBox.png";
import { Banner_one, Banner, Garden } from "../../public/Images";
// import ImageBox from '../../components/imageBox2';
import Images from "./images4/images";
import Gardening from "./Gardening/Gardening";
import Contact from "../../components/contact";
import VideoSeries from "../../components/videoSeries";
import Insights from "../../components/insights";
import CardList from "../../components/card/cardList";
import CardImage from "./CardImage/CardImage";
import CardGallery from "./CardGallery/CardGallery";
import Video from "./video/video";
import { isMobile } from "react-device-detect";
import Stry from "./stories/imageStories";
import TopImages from "./mobileTop/top";
import audioFile from "../../assets/audio/HueBechain.mp3";
import Audio from "./Audio/Audio";
import CardList_one from "../../components/card/cardList_one";
import { fetchJSON } from "../../api";
import Banner_2 from "../../assets/banner.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const Home = () => {
  const [socialLife, setSocialLife] = useState([]);
  const [gardening, setGardening] = useState({});
  const [singleDaily, setSingleDaily] = useState({});
  const [challenges, setChallenges] = useState({});
  const [daily, setDaily] = useState([]);
  const [Ads1, setAds1] = useState([]);
  const [Ads2, setAds2] = useState([]);
  const [Ads3, setAds3] = useState([]);

  useEffect(() => {
    fetchJSON("adds?populate=*", "GET", "").then((data) => {
      setAds1(data.data);
    });

    fetchJSON("ads2s?populate=*", "GET", "").then((data) => {
      setAds2(data.data);
    });

    fetchJSON("ads3s?populate=*", "GET", "").then((data) => {
      setAds3(data.data);
    });

    fetchJSON("social-lives?populate=*", "GET", "").then((data) => {
      setSocialLife(data.data);
    });
  }, []);

  const image1 = Ads1.map(
    (item, index) => item.attributes.images.data[0].attributes.url
  );

  const Auth = {
    headers: {
      Authorization:
        "c 944023dedb88e40789ace68281cfae240e970cfec6e212af97a1001e37ec248836c2284704da7db65173684f709e191a01d89007405f51a9833a5fbc688a3f91fdc7cff7edeaef15d742980f97839ac2cc70eafef74446cdfe53eaa1b990b5797a746b4ab347729bbe71416771ad5be9071ab6c00358a6642e0f3d95c88c191b",
    },
  };

  const fetchGardening = async () => {
    try {
      const { data } = await axios.get(
        "http://45.126.126.209:1337/api/garden-farmings?populate=*",
        Auth
      );
      setGardening(data.data?.reverse()?.slice(0, 1));
    } catch {}
  };

  const fetchSocial = async () => {
    try {
      const { data } = await axios.get(
        `http://45.126.126.209:1337/api/social-lives?populate=*`,
        Auth
      );
      setSocialLife(data?.data?.reverse()?.[0]?.attributes);
    } catch {}
  };

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(
        "http://45.126.126.209:1337/api/daily-blogs?populate=*&",
        Auth
      );
      setSingleDaily(data.data?.reverse()?.slice(0, 1)?.[0]);
      setDaily(data?.data);
    } catch {}
  }
  const fetchChallenges = async () => {
    try {
      const { data } = await axios.get(
        "http://45.126.126.209:1337/api/challenges?populate=*&",
        Auth
      );
      setChallenges(data.data?.reverse()?.slice(0, 1)?.[0]);
    } catch { }
  };

  useEffect(() => {
    fetchGardening();
    fetchSocial();
    fetchBlog();
    fetchChallenges();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      items: 2,
    },
  };
  return (
    <div>
      {/* <Stry /> */}
      <Audio audioFile={audioFile} />
      <TopImages />
      <HomeImage />
      {isMobile ? (
        <Insights image={image1[0]} />
      ) : (
        <Insights image={image1[0]} />
      )}

	  
      <ImageBox
        main_heading="Daily Life"
        title={singleDaily?.attributes?.Title}
        desc={singleDaily?.attributes?.Desc?.slice(0, 200)}
        image={`http://45.126.126.209:1337${singleDaily?.attributes?.images?.data?.[0]?.attributes?.url}`}
      />
      <CardList route={"daily-life"} apiLink={"daily-blogs"} naviLink={"blogs"}  />

      <CardImage />
      {/* <Insights image={Banner}/> */}
      <ImageBox
        main_heading="Challenges"
        title={challenges?.attributes?.Title}
        desc={challenges?.attributes?.Desc?.slice(0, 200)}
        image={`http://45.126.126.209:1337${singleDaily?.attributes?.images?.data?.[0]?.attributes?.url}`}
      />
      <CardList route={"challenges"} apiLink={"challenges"} naviLink={"challenges-item"} />
      <CardImage />

      <ImageBox
        main_heading="Social Life"
        heading="सामाजिक जीवन"
        title={socialLife?.Title}
        desc={socialLife?.Desc}
        image={`http://45.126.126.209:1337${socialLife?.images?.data?.[0]?.attributes?.url}`}
      />
      <CardList route={"social-life"} apiLink={"social-lives"} naviLink={"social-life-item"} />
      {/* <CardGallery /> */}
      <CardImage />
      {/* <CardList />
      <CardImage/> */}
      {/* <Video /> */}
      <Images />

      <LifeHack />
      {/* {image2 && (<Insights image={image2[0]} />)} */}
      <CardGallery />
      <ImageBox
        main_heading="Gardening and Farming"
        heading="बागवानी और खेती"
        title={gardening?.[0]?.attributes?.Titlle}
        desc={gardening?.[0]?.attributes?.Desc?.slice(0, 200)}
        image={`http://45.126.126.209:1337${gardening?.[0]?.attributes?.images?.data?.[0]?.attributes?.url}`}
      />
      <CardList route={"gardening"} apiLink={"garden-farmings"} naviLink={"garndening-item"} />
      <CardImage />
      <SolarHelp />
      {/* <CardList /> */}
      {/* <SolarBuzz/> */}
    </div>
  );
};

export default Home;
