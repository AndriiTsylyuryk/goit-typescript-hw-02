import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

export const ImageGallery = ({ hits, openModal }) => {
  return (
    <ul>
      {hits.map(photo => (
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