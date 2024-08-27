import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../../types";



interface ImageGalleryProps {
  hits: Photo[];
  openModal: (photo: {}) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  hits,
  openModal,
}) => {
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
