import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../articles/card";
import { useNavigate } from "react-router-dom";

const Daily = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate()

  const Auth = {
    headers: {
      Authorization:
        "Bearer 944023dedb88e40789ace68281cfae240e970cfec6e212af97a1001e37ec248836c2284704da7db65173684f709e191a01d89007405f51a9833a5fbc688a3f91fdc7cff7edeaef15d742980f97839ac2cc70eafef74446cdfe53eaa1b990b5797a746b4ab347729bbe71416771ad5be9071ab6c00358a6642e0f3d95c88c191b",
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "http://45.126.126.209:1337/api/daily-blogs?populate=*&",
        Auth
      );
	  setdata(data.data)
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div className="article_div">
      <div className="article_body">
        <h4 style={{ color: "black" }}>Daily Life</h4>
        {data?.map((i, index) => (
          <div
            className="article_card"
            key={index}
            style={{ fontFamily: "Poppins" }}
            onClick={() => navigate(`/blogs/${i.id}`)}
          >
            <img
              src={`http://45.126.126.209:1337${i?.attributes?.images?.data?.[0]?.attributes?.url}`}
              alt=""
            />
            <div className="article_content">
              <a className="heading-title">{i?.attributes?.Title} </a>
              <p className="heading-article">{i?.attributes?.Desc?.slice(0,300)}</p>
            </div>
            <Card title={i?.attributes?.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Daily;
