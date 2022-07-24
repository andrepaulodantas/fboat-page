import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListaDeNotas from '../ListaDeNotas';
import FormularioCadastro from '../FormularioCadastro';
import React from 'react';


class Cards extends React.Component {


  constructor(){
    super();

    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArray = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArray
    }
    this.setState(novoEstado);
  }

render() {
  return (    
    <CardGroup>     
          <Card>
            <Card.Body>
               <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
               <ListaDeNotas notas={this.state.notas} />  
            </Card.Body>                   
          </Card>     
    </CardGroup>
    );
  }
}
  
export default Cards;