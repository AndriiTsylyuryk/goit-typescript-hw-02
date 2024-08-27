import React from "react";

interface ImageCardProps {
  url: string;
  alt: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, alt, onClick }) => {
  return (
    <div>
      <img src={url} alt={alt} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
