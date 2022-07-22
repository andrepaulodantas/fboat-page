import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import FormNota from '../FormNota';
import ImgNota from '../ImgNota';

function Cards() {
  return (
    <CardGroup>
      {Array.of("Const", "Mont", "Dev").map((item, index) => {
        return (   
          <Card key={index}>
            <Card.Body>
              <Card.Title>{item}</Card.Title>
               <FormNota />
            </Card.Body>
              <ImgNota />
          </Card>
        )
      }
      )}
    </CardGroup>
  );
}

     /*  <Card>        
        <Card.Body>          
              <Card.Title key={index}>{item}</Card.Title>          
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src="../assets/img/const.jpg" />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>        
        <Card.Body>
        <Card.Title key={index}>{item}</Card.Title>  
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src="../assets/img/montagem.jpg" />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>       
        <Card.Body>
        <Card.Title key={index}>{item}</Card.Title>  
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src="../assets/img/teste.jpg" />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>       
    </CardGroup>
  })}   
  );
} */

export default Cards;