import React, { useState } from "react";
import "./gallery.css";

import Img1 from "./img/img_1.jpg.webp";
import Img2 from "./img/img_2.jpg.webp";
import Img3 from "./img/img_3.jpg.webp";
import Img4 from "./img/img_4.jpg.webp";
import Img5 from "./img/img_5.jpg.webp";
import Img6 from "./img/img_6.jpg.webp";
import Img7 from "./img/img_7.jpg.webp";
import Img8 from "./img/img_8.jpg.webp";
import Img9 from "./img/img_9.jpg.webp";
import Img10 from "./img/img_10.jpg.webp";
import Img11 from "./img/img_3.jpg.webp";

const Photos = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className="container">
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} />
          <i className="bi bi-x-lg" onClick={() => setModel(false)}></i>
        </div>
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>                
                <img src={item.imgSrc} style={{ width: "100%"}} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Photos;
