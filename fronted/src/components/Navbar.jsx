import {Link} from 'react-router-dom'
import React from 'react';

function Navbar() {
    return (
        <header>
            <div className={"Container"}>
                < Link to={'/'} >
                    <h1 style={{
                        background: 'linear-gradient(135deg, #66fcf1, #45a29e)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textAlign: 'center',
                        fontWeight: 800,
                        fontSize: '2.5rem',
                        textShadow: '0 0 10px #66fcf1'
                    }}>WorkOut Friends</h1>
                </Link>
            </div>
        </header>

    );
}

export default Navbar;