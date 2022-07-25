import { ReactNode } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

type CardBodyProps = {
  title: string;
  text: string;
  children?: ReactNode;
};

const CardBody = ({ title, text, children }: CardBodyProps) => {
  return (
    <CardGroup>
      <Card>        
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {text}
          </Card.Text>
          {children}
        </Card.Body>
       <Card.Img variant="top" src="../assets/img/const.jpg" />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>        
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {text}
          </Card.Text>
          {children}
        </Card.Body>
        <Card.Img variant="top" src="../assets/img/montagem.jpg" />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>       
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {text}
          </Card.Text>
          {children}
        </Card.Body>
        <Card.Img variant="top" src="../assets/img/teste.jpg" />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardBody;