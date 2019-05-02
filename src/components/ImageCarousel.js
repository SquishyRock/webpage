import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';


class ImageCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt='1'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt='2'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt='3'
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ImageCarousel;
