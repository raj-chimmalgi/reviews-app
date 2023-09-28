import { useState } from "react";
import reviews from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa6";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const handleLeft = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleRight = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > reviews.length - 1 ? 0 : newIndex;
    });
  };

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn">
            <FaChevronLeft onClick={handleLeft} />
          </button>
          <button className="next-btn">
            <FaChevronRight onClick={handleRight} />
          </button>
        </div>

        <button className="btn btn-hipster" onClick={handleSurprise}>
          Surprise Me!
        </button>
      </article>
    </main>
  );
};

export default App;
