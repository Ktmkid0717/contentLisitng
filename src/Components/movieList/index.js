import React, { useState, useEffect } from "react";
import "./index.css";
import MovieListing from "./movieListing";

const List = () => {
  const [images, setImages] = useState([]);
  const [titleName, settitleName] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
     // eslint-disable-next-line
  },[]);
  const handleScroll = () => {
    const { scrollY } = window;
    const { scrollHeight } = document.documentElement;
    
    if (scrollY + window.innerHeight >= scrollHeight) {
      // Scrolled to the end of the page
      // Trigger your API call here
      if(page < 4 ) {
        setPage((page)=>page+1)
      }
      
      console.log('log',page);
    }
  };
  useEffect(() => {
    if(page < 4 ) {
    fetchImages()
    }
     // eslint-disable-next-line
  }, [page]);  
  
  const fetchImages = async () => {
    console.log('fs');
    try {
      const response = await fetch(
        `https://test.create.diagnal.com/data/page${page}.json`
      );
      const data = await response.json();
      setImages((prevData) => [...prevData, ...data.page["content-items"].content]);
      settitleName(data?.page?.title);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
console.log(images);

  return (
    <div className="mainWrapper">
      <div className="headerWrapper">
        <div className="header">
          <div>
            <img
              src="https://test.create.diagnal.com/images/Back.png"
              height={"20px"}
              alt=""
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
            alt=""
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
