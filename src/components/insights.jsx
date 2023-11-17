import React from "react";
import image from '../assets/insights.png';
import './index.css';


const Insights = (props) =>{
    console.log(props.image)
    return(
        <div className="insights">
            <img src={`http://45.126.126.209:1337`+props.image}></img>
        </div>
    )
}
export default Insights;