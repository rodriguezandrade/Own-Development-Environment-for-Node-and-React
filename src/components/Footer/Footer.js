import React from 'react';
import classes from './Footer.css';

const footer = () => {
    return (
        <div>
            <div style={classes.footer} />
            <div style={classes.style}>
                This is footer
            </div>
        </div>
    );
}

export default footer;