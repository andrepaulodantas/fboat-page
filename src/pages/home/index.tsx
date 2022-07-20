import react from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";


class home extends react.Component {
  render() {
    return (
      <div>      
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/img/fboatdemo.jpg"
              alt="First slide"
            />

            <Carousel.Caption>

              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/img/fboatexp.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/img/fboatold.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>

              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default home;