import React from "react";

const ImageCard = ({ url, alt, onClick }) => {
  return (
    <div>
      <img src={url} alt={alt} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
