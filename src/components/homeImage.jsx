import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import image from "../assets/homeImage.png";
import { fetchJSON } from "../api";
// import image from '../../assets/card.png';
import { SolarBuzz2, SolarBuzz1, SolarBuzz, SolarHelp } from "../public/Images";
import { useLanguage } from "../LanguageContext";

const cardData = [
	{
		image: SolarHelp,
		title: "The solar buzz in Bundelkhand is helping.",
		content:
			"Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
	},
	{
		image: SolarBuzz,
		title: "The solar buzz in Bundelkhand is helping.",
		content:
			"Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
	},
	{
		image: SolarBuzz1,
		title: "The solar buzz in Bundelkhand is helping.",
		content:
			"Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
	},
	{
		image: SolarBuzz2,
		title: "The solar buzz in Bundelkhand is helping.",
		content:
			"Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
	},
	{
		image: image,
		title: "The solar buzz in Bundelkhand is helping.",
		content:
			"Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
	},
	{
		image: image,
		title: "The solar buzz in Bundelkhand is helping.",
		content:
			"Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
	},
	{
		image: image,
		title: "The solar buzz in Bundelkhand is helping.",
		content:
			"Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
	},
];

const ImageGallery = ({ data }) => {
	return (
		<>
			{data.map((item, index) => (
				<ImageCard key={item.id} image={item.attributes.image.data} />
			))}
		</>
	);
};

const ImageCard = ({ image, key }) => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="carousel_container">
			{/* <Carousel
				showDots={true}
				draggable={true}
				customTransition="all 1000ms"
				transitionDuration={500}
				fade={true}
				arrows={false}
				responsive={responsive}
				autoplay={true}
				autoplaySpeed={500}
				//  sliderClass="card"
			> */}
				{image.map((item, index) => (
					<div className="picture-container" key={key}>
						<img
							src={`http://45.126.126.209:1337${item.attributes.url}`}
							alt="Description of the image"
							className="image"
						/>
						<div className="text-container">
							{/* <h2>{card.title}</h2>
                <p>
                    {card.content}
                </p> */}
							<button className="read-more-button-box">Read More</button>
						</div>
					</div>
				))}
			{/* </Carousel> */}
		</div>
	);
};
const PictureWithText = () => {
	const [bannerData, setBannerData] = useState([]);
	const { selectedLanguage, setSelectedLanguage } = useLanguage();

	useEffect(() => {
		if(selectedLanguage==="en")
		{
			fetchJSON("banners?populate=*", "GET", "").then((data) => {
				setBannerData(data.data);
			});
		}
		else{
			fetchJSON("banners?populate=*", "GET", "").then((data) => {
				setBannerData(data.data);
			});
		}
		
	}, []);
	console.log(bannerData);
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	// const settings = {
	// 	dots: true,
	// 	infinite: false,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	initialSlide: 0,
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// };

	return (
		<>
		{/* <div className="carousel_container">
			<Carousel
				showDots={true}
				draggable={true}
				customTransition="all 1000ms"
				transitionDuration={500}
				fade={true}
				arrows={false}
				responsive={responsive}
				autoplay={true}
				autoplaySpeed={500}
				
			> */}
{/* {bannerData.map((card, index) => ( */}
<ImageGallery data={bannerData} />
			
{/* ))} */}

{/* </Carousel>
</div> */}
		</>
	);
};

export default PictureWithText;
