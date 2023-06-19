import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './index.css'

const MovieListing = ({data}) => {
  return (
    <div className="ListingWrapper">
      {data?.length>0 && data?.map((image,index) => (
      <div key={index}>
          <LazyLoadImage
          key={image.name}
          src={`https://test.create.diagnal.com/images/${image["poster-image"]}`}
          alt={image.name}
          effect="blur"
          placeholderSrc="https://test.create.diagnal.com/images/placeholder_for_missing_posters.png"
        />
      </div>
      ))}
    </div>
  );
};

export default MovieListing;