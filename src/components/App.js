import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'

const App = () => {
    const navbarBuilder = [
        { name: 'Home', details: "this is home details" },
        { name: 'Data', details: "this is data details" }
    ];
    return (
        <div className='container'>
            <body>
                <Navbar data={navbarBuilder}></Navbar>
                <h1> Hello World this is a h1 </h1>

                <button type="button" className="btn btn-primary">Primary</button>
                <Footer></Footer>

            </body>
        </div>
    );
}

export default App;
