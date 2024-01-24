import React, { useState } from 'react';
import './slider.css';

const Slider = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="slider-container">
            <div className="arrows">
                <i className="fa fa-arrow-left" aria-hidden="true" onClick={prevSlide}></i>
                <i className="fa fa-arrow-right" aria-hidden="true" onClick={nextSlide}></i>
            </div>
            <div className="slider">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`slide ${index >= currentIndex && index < currentIndex + 3  ? 'active-slider' : ''}`}
                    >
                        <div className="icon-name">
                            <img src={item.icon} alt="" />
                            <div className="name-subname">
                                <p>{item.name}</p>
                                <p>{item.subname}</p>
                            </div>
                        </div>
                        <div className="review">{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
