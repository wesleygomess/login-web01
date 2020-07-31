import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './login.css';

import firebase from '../../firebase';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount(){
        if(firebase.getCurrent()){
            this.props.history.replace('/dashboard');
        }
    }

    handleLogin(e){
        e.preventDefault();
        this.login();
    };

    login = async () => {
        
        const { email, password } = this.state
        try{

            await firebase.login(email, password)
            .catch((error)=>{
                if(error.code === 'auth/user-not-found'){
                    alert('Usuário não existe');
                }else{
                    alert('Código do erro:', error.code);
                    return null;
                }
            });

            this.props.history.replace('/home');

        }catch(error){
            alert(error.message);
        }

    }

    disbleButton() {
        const {email, password} = this.state
        let componentBtn = document.querySelector("button[name:btn]");
        if(email && password === ''){
            componentBtn.setAttribute('disabled')
        }
    }

    render(){
        return(
    
            <form id="login" onSubmit={this.handleLogin}>
            
                <h2>Logar</h2>
            
                <div>
                    <label>E-mail</label>
                    <input type="email" placeholder="Digite seu e-mail de acesso" autoFocus autoComplete="off"
                        value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value}) }     
                    />
                </div>

                <div>
                    <label>Senha</label>
                    <input type="password" placeholder="Digite sua senha" autoComplete="off"
                        value={this.state.password}
                        onChange={ (e) => this.setState({password: e.target.value}) }
                    />
                </div>

                <button name="btn" type="submit">Entrar</button>
                
                <div id="hr-login">
                    <hr />
                    <p>
                        Não tem uma conta?<Link to="cadastrousuarios" >Registre-se</Link>
                    </p>
                </div>                   
            
            </form>
        
        );
    }


}

export default withRouter(Login);