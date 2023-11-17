import React, { useEffect, useState } from "react";
import { fetchJSON } from "../../api";
import "./changeMaker.css";
// import Card from "./card.jsx";

import axios from "axios";

const ChangeMaker = () => {
  const [data, setData] = useState([]);
  const [singledata, setSingledata] = useState({});

  const Auth = {
    headers: {
      Authorization:
        "Bearer 944023dedb88e40789ace68281cfae240e970cfec6e212af97a1001e37ec248836c2284704da7db65173684f709e191a01d89007405f51a9833a5fbc688a3f91fdc7cff7edeaef15d742980f97839ac2cc70eafef74446cdfe53eaa1b990b5797a746b4ab347729bbe71416771ad5be9071ab6c00358a6642e0f3d95c88c191b",
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "http://45.126.126.209:1337/api/change-makers?populate=*",
        Auth
      );
      setData(data.data);
      setSingledata(data?.data?.reverse()?.[0]);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(data);
  console.log(singledata);

  return (
    <div>
      <div className="change-maker">
        <div>
          <img
            src={`http://45.126.126.209:1337${singledata?.attributes?.Images?.data?.[0]?.attributes?.url}`}
            alt=""
          />
        </div>
        <div className="maker-text">{singledata?.attributes?.Desc}</div>
      </div>
      <div className="article_div">
        <div className="article_body">
          <h4 style={{ color: "black" }}>The Change Makers Project</h4>
          {data?.map((i, index) => (
          <div
            className="article_card"
            key={index}
            style={{ fontFamily: "Poppins" }}
          >
            <img
              src={`http://45.126.126.209:1337${i?.attributes?.Images?.data?.[0]?.attributes?.url}`}
              alt=""
            />
            <div className="article_content">
              <a className="heading-title">{i?.attributes?.Title} </a>
              <p className="heading-article">{i?.attributes?.Desc?.slice(0,300)}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default ChangeMaker;
