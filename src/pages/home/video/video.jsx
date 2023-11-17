import React,{useState,useEffect} from "react";
import {fetchJSON }from '../../../api'
import './video.css'
import { useLanguage } from "../../../LanguageContext";

const Video = () =>{
    const [videoData,setVideoData]=useState([])
    const { selectedLanguage, setSelectedLanguage } = useLanguage();
    const storedLanguage = sessionStorage.getItem('selectedLanguage');
    // function VideoApi(){
      
    // }
  useEffect(() => {
    const fetchData = async () => {

      let apiUrl;
      if (`${storedLanguage}` === 'en' || sessionStorage.length===0) {
        apiUrl = 'manufactures?populate';
      } else if (`${storedLanguage }`=== 'hi') {
        apiUrl = 'hindi-manu-factures?populate=*';
      }
    
			fetchJSON(apiUrl, "GET", "").then((data) => {
        console.log("maufac")
       console.log(data.data[0].attributes.desc);
      // console.log(data);
      setVideoData(data.data[0].attributes)
      
    });
		
			
		
  }

  fetchData()
    
  }, [storedLanguage,videoData]);
  console.log(`${videoData.link}`.split("?v=")[1])
    return(
        <div className="video">
            <h1>उत्पादन</h1>
         <iframe
          title="Video 1"
          width="100%"
          height="580"
          src={'https://www.youtube.com/embed/'+`${videoData.link}`.split("?v=")[1]}
          allowFullScreen
          className="video"
        ></iframe>
        <h2>{videoData.desc}</h2>
        {/* <h2>A traditional Odia millet dish Atkel is Helping fight infant and maternal</h2> */}
        <p>{videoData.title}</p>
        {/* <p>Kalalandi was once know as the land of starvation deaths. For the past couple of years,UNICEF</p> */}
        </div>
    )

}
export default Video;