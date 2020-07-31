import React from 'react';
import Header from '../Header';

import './main.css'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content">
            <div>
                <h5>Aqui ficara o main!</h5>
            </div>    
        </main>    
    </React.Fragment>    
