import React from "react";
import ImageCard from "../ImageCard/ImageCard";

interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
}

interface ImageGalleryProps {
  hits: Photo[];
  openModal: (photo: {}) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  hits,
  openModal,
}) => {
  console.log(hits);

  return (
    <ul>
      {hits.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            url={photo.urls.small}
            alt={photo.alt_description}
            onClick={() => openModal(photo)}
          />
        </li>
      ))}
    </ul>
  );
};
