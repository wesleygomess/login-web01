import React from 'react';
import './logo.css'

import Logo from '../../../images/logo.png'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="Logo" />
        </a>    
    </aside>