import React, { useEffect, useState } from "react";
import { ImageCard1 } from "../../public/Images";
import "./blog.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleGardening = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const Auth = {
    headers: {
      Authorization:
        "Bearer 944023dedb88e40789ace68281cfae240e970cfec6e212af97a1001e37ec248836c2284704da7db65173684f709e191a01d89007405f51a9833a5fbc688a3f91fdc7cff7edeaef15d742980f97839ac2cc70eafef74446cdfe53eaa1b990b5797a746b4ab347729bbe71416771ad5be9071ab6c00358a6642e0f3d95c88c191b",
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `http://45.126.126.209:1337/api/garden-farmings/${id}?populate=*&`,
        Auth
      );
      setData(data.data);
    } catch {}
  };
  useEffect(() => {
    fetchHandler();
  }, [id]);

  const divStyle = {
    maxWidth: "1000px",
    margin: "auto",
    padding: "20px",
    textAlign: " center",
  };

  const imgStyle = {
    maxWidth: "100%",
    margin: "auto",
  };

  return (
    <div style={divStyle}>
      <img
        src={`http://45.126.126.209:1337${data?.attributes?.images?.data?.[0]?.attributes?.url}`}
        alt=""
        style={imgStyle}
      />
      <p className="title" style={{ fontSize: "20px" }}>
        {" "}
        {data?.attributes?.Title}{" "}
      </p>
      <p className="desc" style={{ fontSize: "16px" }}>
        {" "}
        {data?.attributes?.Desc}{" "}
      </p>
    </div>
  );
};

export default SingleGardening;
