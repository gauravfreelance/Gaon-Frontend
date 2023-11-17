import React from "react";
import "./gaontv.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Gaon_Tv = () => {
  const [data, setData] = useState([]);

  const Auth = {
    headers: {
      Authorization:
        "Bearer 944023dedb88e40789ace68281cfae240e970cfec6e212af97a1001e37ec248836c2284704da7db65173684f709e191a01d89007405f51a9833a5fbc688a3f91fdc7cff7edeaef15d742980f97839ac2cc70eafef74446cdfe53eaa1b990b5797a746b4ab347729bbe71416771ad5be9071ab6c00358a6642e0f3d95c88c191b",
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `http://45.126.126.209:1337/api/gaon-tvs?populate=*`,
        Auth
      );
      setData(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div>
      <div className="gaontv-container1">
        {data?.map((i, index) => (
          <div className="card-tv" key={index}>
            <iframe
              src={i.attributes?.link}
              title=""
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>
            <h3> {i?.attributes?.Title} </h3>
            <p> {i?.attributes?.Desc} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
