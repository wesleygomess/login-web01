import React from 'react';
import { HashRouter } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
// import firebase from '../firebase';

import Logo from '../Components/templates/Logo'
import Nav from '../Components/templates/Nav';
import Main from '../Components/templates/Main'
import Footer from '../Components/templates/Footer';

// import './app.css';
import './app.css'

export default props => 
  <div className="app">
    <Logo />
    <Nav />
    <Main icon="home" titulo="Inicio" subtitle="Esta ferramenta foi criada pensando em você empreendedor."/>
    <Footer />
  </div>  








// class App extends Component{

//   state = {
//     firebaseInitialized: false
//   }

//   componentDidMount(){
//     firebase.isInitialized().then(result => {
//       this.setState({firebaseInitialized: result});
//     })
//   }

//   render(){

//     return this.state.firebaseInitialized !== false ? (
//       <HashRouter>
//         <div>
//           <Nav />
//           <Routes />
//           <Footer />
//         </div> 
//       </HashRouter>  
//     ): (
//      <di></di> 
//     );
    
//   }
// }

// export default App;