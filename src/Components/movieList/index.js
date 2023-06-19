import React, { useState, useEffect } from "react";
import "./index.css";
import MovieListing from "./movieListing";

const List = () => {
  const [images, setImages] = useState([]);
  const [titleName, settitleName] = useState("");

  useEffect(() => {
    // Simulating API call and setting the response in the state
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://test.create.diagnal.com/data/page1.json"
        );
        const data = await response.json();

        console.log(data.page["content-items"].content);

        setImages(data.page["content-items"].content);
        settitleName(data?.page?.title);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="mainWrapper">
      <div className="headerWrapper">
        <div className="header">
          <div>
            <img
              src="https://test.create.diagnal.com/images/Back.png"
              height={"20px"}
            />
          </div>
          <div>
            <h2>{titleName}</h2>
          </div>
        </div>
        <div>
          <img
            src="https://test.create.diagnal.com/images/search.png"
            height={"20px"}
          />
        </div>
      </div>
      <div>
        <MovieListing data={images} />
      </div>
    </div>
  );
};

export default List;
