import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';

import './singUp.css'

class SingUp extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            passwordConfirm: '',
        }

        this.register = this.register.bind(this);
        this.onResister = this.onResister.bind(this);
    }

    register(e){
        e.preventDefault();
        this.onResister();
    }

    onResister = async(e) => {
        try {
            const { email, name, password, passwordConfirm } = this.state;
            
            if(password === passwordConfirm && password >= 6){

                console.log("name", name);
                await firebase.register(name, email, password)
                this.props.history.replace('/dashboard');

            }else{
                alert('Senha inválida ou não coincide')
                e.preventDefault();
            }

        }catch(error){
            alert(error.message);
        }
    }

    render(){
        return(
            <form id="singUp" onSubmit={this.register}>
                
                <h2>Realizar o cadastro</h2>

                    <div>
                        <label>E-mail</label>
                        <input type="text"  placeholder="E-mail de acesso" autoFocus
                            value={this.state.email}
                            onChange={ (e) => {this.setState({ email: e.target.value })} }
                        />
                    </div>

                    <div>    
                        <label>Nome</label>
                        <input type="text" placeholder="Digite o nome de usuário" 
                            value={this.state.name}
                            onChange={ (e) => {this.setState({ name: e.target.value })} }
                        />
                    </div>    
                    
                    <div>
                        <label>Senha</label>
                        <input type="password" placeholder="Crie uma senha"
                            value={this.state.password}
                            onChange={ (e) => {this.setState({ password: e.target.value })} }
                        />
                    </div>

                    <div>   
                        <label>Confirme</label>
                        <input type="password" placeholder="Confirme a senha"
                            value={this.state.passwordConfirm}
                            onChange={ (e) => {this.setState({ passwordConfirm: e.target.value })} }
                        />
                    </div> 
                    
                    <button type="submit" >Cadastrar</button>

                    <div id="hr-singup">
                        <hr />
                        <Link to="/">Voltar</Link>
                    </div>   
                    
            </form>      
        );
    }
}

export default withRouter(SingUp);