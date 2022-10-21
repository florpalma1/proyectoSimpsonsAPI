import { Card, Container, Row, Col } from "react-bootstrap"

const Frase = () => {
  return (
    <>
      <Container>
        <Card>
          <Card.Body>
          <Row>
            <Col md={5} class="text-center">
              <img src="https://trello.com/1/cards/63288a1289c67400fd5b534f/attachments/632b248698baf80018c2e999/previews/632b248698baf80018c2e99f/download/image.png" alt="Homero Simpsons" />
            </Col>
            <Col md={7}>
              <Card.Title>
                <h5>Homero Simpson</h5>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus error eos ab. Debitis natus veritatis, necessitatibus nostrum unde, ab maxime laudantium, iure soluta praesentium quo minus? Aspernatur aliquam consectetur architecto?
              </Card.Text>
            </Col>
          </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Frase