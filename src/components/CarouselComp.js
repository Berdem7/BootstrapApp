import React from "react";
import { Carousel } from 'react-bootstrap' 

function CarouselComp (){
    return(
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://randomwordgenerator.com/img/picture-generator/52e8d3414d53a514f1dc8460962e33791c3ad6e04e507749772f78d49345cd_640.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://randomwordgenerator.com/img/picture-generator/54e7dd434852af14f1dc8460962e33791c3ad6e04e5074417c2f7dd59e49c5_640.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://randomwordgenerator.com/img/picture-generator/53e1d74a4950ac14f1dc8460962e33791c3ad6e04e5074417c2f7dd49345c7_640.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CarouselComp