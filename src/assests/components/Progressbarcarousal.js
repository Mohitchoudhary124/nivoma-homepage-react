import React, { useRef, useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CarouselWithProgressBar = ({ items }) => {
  const carouselRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.next();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const progressBar = (value) => (
    <div style={{ width: '50px', height: '50px' }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: `rgba(62, 152, 199, ${value / 100})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );

  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      nav
      onChange={(event) => setCurrentItemIndex(event.item.index)}
      ref={carouselRef}
    >
      {items.map((item, index) => (
        <div key={index} className="item">
          <img src={item.image} alt={item.alt} />
          {progressBar(item.progress)}
        </div>
      ))}
    </OwlCarousel>
  );
};

export default CarouselWithProgressBar;
