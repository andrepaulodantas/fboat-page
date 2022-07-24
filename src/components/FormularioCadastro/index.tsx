import React, { ChangeEvent } from 'react';
import "./estilo.css";

interface Props {
  criarNota: (titulo: string, texto: string) => void;
}

interface State {
  titulo: string;
  texto: string;
}

class FormularioCadastro extends React.Component<Props, State>  {
  titulo!: string;
  texto!: string;
    
  constructor(props : never) {
    super(props);
    this.state = {
      titulo: "",
      texto: ""
    };
  }

  _handleChangeMudancaTitulo = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    this.setState({ titulo: event.target.value });
  }

  _handleMudancaTexto = (event: { preventDefault: () => void; target: { name: any; value: any; }; }) => {
    event.preventDefault();
    this.texto = event.target.value;     
  }

  _criarNota =  (event: React.FormEvent<HTMLFormElement>)  => {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);    
  }

  
  render() {
    return (
      <>
      <div>
        <form className="form-cadastro"
          onSubmit={this._criarNota.bind(this)}
        >         
          <input
            type="text"
            name="titulo"
            className="form-cadastro_input"
            onChange={this._handleChangeMudancaTitulo.bind(this)}
          />        
          <textarea
            rows={15}
            name="descricao"
            placeholder="Descrição"	
            className="form-cadastro_input"
            onChange={this._handleMudancaTexto.bind(this)}
          />                 
          <button className="form-cadastro_input form-cadastro_submit">
            Cadastrar
          </button>
        </form>
      </div>
      </>
    );
  }
}

export default FormularioCadastro;



