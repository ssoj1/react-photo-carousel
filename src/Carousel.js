import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  // Decrements currCardIdx state by 1
  function goBack() {
    setCurrCardIdx(currCardIdx - 1);
  }

  const showOrHideRight = (currCardIdx < total-1) 
                      ? { visibility: "visible" } 
                      : { visibility: "hidden" };

  const showOrHideLeft = (currCardIdx !== 0) 
                      ? { visibility: "visible" } 
                      : { visibility: "hidden" } ;

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="fas fa-chevron-circle-left fa-2x"
          style={ showOrHideLeft }
          onClick={goBack}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="fas fa-chevron-circle-right fa-2x"
          style={ showOrHideRight }
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
