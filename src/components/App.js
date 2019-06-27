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
            <Navbar  ></Navbar>
            <body>
                <div className="jumbotron">
                    <h1 className="display-4">Body!</h1>
                    <p className="lead">his is Body</p>
                    <hr className="my-4" />
                    <p>This is Body</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
                <Footer> </Footer>
            </body>

            
        </div>
    );
}

export default App;
