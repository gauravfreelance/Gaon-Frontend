import React ,{useState,useEffect}from 'react';
import {fetchJSON }from '../api'
import './index.css'; // Import your CSS file

const ImageGallery = () => {
  // const [videoData,setVideoData]=useState([])

  // useEffect(() => {
  //   fetchJSON("manufactures?populate=*", "GET", "").then((data) => {
  //      console.log(data.data[0].attributes.image.data[0].attributes.url);
  //     console.log(data);
  //     setVideoData(data.data)
      
  //   });
  // }, [videoData]);
  // console.log(videoData)
  return (
    <div className="gallery-container">
      <div className="image-box1">
        <h2 className="image-header">हमारी वीडियो श्रृंखला</h2>
        <iframe
          title="Video 1"
          src="https://www.youtube.com/embed/zPOpHiPWdME"
          allowFullScreen
          className="video1"
        ></iframe>

      </div>
      <div className="image-box1">
        <h2 className="image-header">Our Recording</h2>
        <iframe
          title="Video 1"
          src="https://www.youtube.com/embed/zPOpHiPWdME" // Replace with the YouTube video URL
          allowFullScreen
          className="video1"
        ></iframe>

      </div>
    </div>
  );
};

export default ImageGallery;
