import React,{useState,useEffect} from "react";
import {fetchJSON }from '../../../api'
import "./stories.css";

import Stories from "react-insta-stories";

const VideoStory = () => {

  const [storyData,setStoryData]=useState([])

  useEffect(() => {
    fetchJSON("stories/?populate=*", "GET", "").then((data) => {
        console.log("maufac")
       console.log(data.data[0].attributes);
      // console.log(data);
      setStoryData(data.data)
      
    });
  }, []);
	const images = [
    {
      url:	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      type:'video'
    },
    {
      url:	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      type:'video'
    },
	,
		
	];
  const video = storyData.map((item,index)=> {
    return `${item.attributes.link}`})
  console.log(storyData)
  console.log(video)

  // const stories = video.map((videoId, index) => ({
  //   content: (
  //     <iframe
  //       title={`YouTube Video ${index + 1}`}
  //       width="560"
  //       height="315"
  //       src={`https://www.youtube.com/embed/${videoId}`}
        
  //       allowFullScreen
  //     />
  //   ),
  // }));

	return (
		<div className="stories">
      {/* {storyData.map((item,index) => (  */}
        <Stories
				stories={images}
				defaultInterval={1500}
				width={432}
				loader
				loop
				height={768}
        
			/>
      {/* ))} */}
			
      {/* <Stories stories={stories} defaultInterval={1500}>
        {(props) => (
          <Story{...props}>
            <div>Your custom story UI here</div>
          </Story>
        )}
      </Stories> */}
		</div>
	);
};
export default VideoStory;
