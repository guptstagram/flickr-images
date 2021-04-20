import React from "react";
import "../styles/imagesComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { maximiseImage } from "../actions/maximiseImageAction";

const ImagesComponent = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.imageDataReducer);

  const handleImageClick = (imgobj) => {
    dispatch(maximiseImage(imgobj));
    document.body.style.overflow = "hidden";
  };

  return (
    <div className={`images-wrapper `}>
      <div className="images-container">
        {images.map((img) => (
          <div key={img.id} className="image">
            <img
              src={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
              alt={img.title}
              onClick={() => handleImageClick(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesComponent;
