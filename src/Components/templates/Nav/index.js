import React, {Component} from 'react';
// import {Link, withRouter} from 'react-router-dom';

// import firebase from '../../../firebase'

import './nav.css'

export default props => 
    <aside className="menu-area">
        Menu de opções
    </aside>    































// class Nav extends Component{
//     constructor(props){
//         super(props)
        
//         this.state = {
//             name: localStorage.name
//         }

//         this.logout = this.logout.bind(this);
//     }

//     async componentDidMount(){
//         if(!firebase.getCurrent()){
//             this.props.history.replace('/');
//             return null;
//         }

//         firebase.getUserName((info) => {
//             localStorage.name = info.val().name;
//             this.setState({ name: localStorage.name });
//         })
//     }

//     logout = async () => {
//         await firebase.logout()
//         .catch((error) => {
//             alert(error)
//         });

//         this.props.history.push('/');
//     }

//     render(){
//         return(
//             <div>
           

//             <div className="menu-section">
//                 <nav>
//                    <div className="user-log">
//                                 <h2>
//                                     Olá, {this.state.name}
//                                 </h2> 
//                                 <button onClick={() => this.logout()}>Sair</button>   
//                             </div>
//                         <hr />   
//                     <ul>
//                         <li>
//                             <Link  to="/cadastrocliente">Cadastrar Cliente</Link>
//                         </li>  
//                         <li>
//                             <a>Formuláorio de Conserto</a>
//                         </li> 
//                         <li>
//                             <a>Serviços</a>
//                         </li> 
//                         <li>
//                             <a>Caixa</a>
//                         </li>   
//                     </ul> 
//                 </nav>   
//             </div>  
//             </div> 
//         );
//     }
// }

// export default withRouter(Nav);