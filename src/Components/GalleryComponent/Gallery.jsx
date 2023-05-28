import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Gallery = () => {
  return (
    <Container className="text-light">
     
      <h1 className="display-4 border-top border-bottom p-2 mx-auto w-75 mb-5 mt-5 animate__animated animate__bounceInRight  ">
        My Music Gallery
      </h1>

      <Row>
        <Col sm={4}>
          <h2>Videos:</h2>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col sm={4}>
          <iframe
            width="350"
            height="350"
            className="rounded"
            src="https://www.youtube.com/embed/0iB7pbhWAHI"
            title="בית בלי גג- טליה פלח"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={4}>
          <iframe
            className="rounded"
            width="350"
            height="350"
            src="https://www.youtube.com/embed/hdyM3sb67yw"
            title="יובל דיין - אין עוד מלבדו | אנרגיות שיא במופע צמאה | בניני האומה 13.12.23"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={4}>
          <iframe
            className="rounded"
            width="350"
            height="350"
            src="https://www.youtube.com/embed/orRHwZyxcPg"
            title="סדום - סיון חלמיש / Sdom - Sivan Hallamish"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={4}>
          <h2>Photos:</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={4}>
          <img
            style={{ height: "350px", width: "350px" }}
            className="rounded"
            src="https://scontent.ftlv15-1.fna.fbcdn.net/v/t39.30808-6/277445691_3091944161120620_3276540043220837482_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=aFn6jJP-mD8AX-7opLh&_nc_ht=scontent.ftlv15-1.fna&oh=00_AfC60-T5GG7NujVuVkxobBcQrQzfjj4Y4xv1fpCHJodhew&oe=6478007A"
            alt="me"
          />
        </Col>
        <Col sm={4}>
          <img
            style={{ height: "350px" }}
            className="rounded"
            src="https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.6435-9/64358755_2261093124205732_1493242094527971328_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=m-3gz9Va_eAAX8vsHaU&_nc_ht=scontent.ftlv15-1.fna&oh=00_AfAeXTS9vVksnsMk_JEC_QHI-cnWGJB7HSdxIL2GXX14gQ&oe=649AADA9"
            alt="me"
          />
        </Col>
        <Col sm={4}>
          <img
            style={{ height: "350px" }}
            className="rounded"
            src="https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.6435-9/67151754_2286495294998848_3547314069310537728_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=fJ3etL54xpgAX8nH4KL&_nc_oc=AQkoA1x1D-e8IiTpJtluq4jMhPXmozzMq2jZj-QGF6s9oTnrB3DzXuAMVZ0eWBa8F7LxdUKoiSJhVy6FMX8ebPHO&_nc_ht=scontent.ftlv15-1.fna&oh=00_AfCkKWrtJ6wYHObEaC7VniZ27QoMwWkyv9oblIzadNlI9Q&oe=649AA128"
            alt="me"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
