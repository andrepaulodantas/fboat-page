import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function Cards() {
  return ( 
    <section>
      <Card>
        <Card.Img variant="top" src="../assets/img/img_avatar1.png" />
        <Card.Body>
          <Card.Title>Card title </Card.Title>
          <Card.Text>
            Card Text This card has supporting text below as a natural lead-in
            to additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="../assets/img/img_avatar1.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="../assets/img/img_avatar1.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 11 mins ago</small>
        </Card.Footer>
      </Card> 
    </section>  
  );
}



