import React from "react";
import { Card } from "react-bootstrap";

 
class ImgNota  extends React.Component {
    
    render() { 
        return ( 
        <><Card.Img variant="top" src="../assets/img/const.jpg" /><Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer></>
         );
    }
}
 
export default ImgNota;