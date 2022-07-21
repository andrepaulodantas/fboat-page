import { Component } from "react";
import FormRegistration from "../../components/FormRegistration/FormRegistration";

class Login extends Component {    

    criarNota(titulo, texto){
        console.log(`uma nova nota foi criada ` + titulo + " " + texto)
    }

    render() { 
        return (             
            <div>                
                <h1>Login</h1>
                <p>This is the login page</p>
                <FormRegistration criarNota={this.criarNota}/>
            </div>

        );
    }
}
 
export default Login ;