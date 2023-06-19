import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './index.css'

const MovieListing = ({data}) => {
  console.log(data);
  return (
    <div className="ListingWrapper">
      {data?.length>0 && data?.map((image, index) => (
        <LazyLoadImage
          key={index}
          src={`https://test.create.diagnal.com/images/${image["poster-image"]}`}
          alt={image["poster-image"]}
          effect="blur"
          placeholderSrc="https://test.create.diagnal.com/images/placeholder_for_missing_posters.png"
        //   placeholderSrc="/placeholder.jpg"
        />
      ))}
    </div>
  );
};

export default MovieListing;

// import React from "react";
// // import "./styles.css";
// import MovieList from "./movieList";

// const App = () => {
//   const movies = [
//     {
//       id: 1,
//       title: "Movie 1",
//       poster: "https://test.create.diagnal.com/images/poster1.jpg"
//     },
//     { id: 2, title: "Movie 2", poster: "poster2.jpg" }
//     // Add more movie objects here
//   ];

//   return (
//     <div>
//       <h1>Movie Posters</h1>
//       <MovieList movies={movies} />
//     </div>
//   );
// };
// export default App;
