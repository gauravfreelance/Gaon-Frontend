import React, { Fragment, useState } from "react";
import "./index.css";
import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router-dom";

const ImageBox = (props) => {
	const { selectedLanguage, setSelectedLanguage } = useLanguage();
	console.log(props);
	const nav = useNavigate();
	const handleClick = () => {
    if(props.main_heading == 'Daily Life'){
      nav('blogs/daily-life')
    }
    else if(props.main_heading == 'Social Life'){
      nav('blogs/social-life')
    }
    else{
      nav('blogs/gardening')
    }
  };
	return (
		<>
			{/* {props.life.map((item,index)=>( */}

			<>
				<h1 className="imageBox_header">{props.main_heading}</h1>
				<div className="container-box">
					<div className="image-container-box">
						<img
							src={props.image}
							alt="Description of the image"
							className="image-box"
							// onClick={openModal}
						/>
					</div>
					<div className="text-container-box">
						<div>
							<h1>{props.heading}</h1>
							<h2>{props.title}</h2>
							<p>{props.desc}</p>
							<button onClick={handleClick} className="read-more-button-box">
								Read More
							</button>
						</div>
					</div>
					<div></div>
				</div>
			</>
			{/* ))}  */}
		</>
	);
};

export default ImageBox;
