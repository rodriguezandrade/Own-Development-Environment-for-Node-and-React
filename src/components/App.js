import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const App = () => {
    const home = "home";
    return (
        <div className='container'>
            <Navbar data={home}></Navbar>
            <h1>
                Hello World this is a h1!
         </h1>
            <button type="button" className="btn btn-primary">Primary</button>

        </div>
    );
}

export default App;
