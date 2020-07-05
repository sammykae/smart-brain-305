import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.jpg';
import './Logo.css';
const Logo=()=>{
    return(
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' 
            option={{max:1}} 
            style={{height:150, width:150}}>
                <div className='Tilt-inner pa1'>
                    <img style={{paddingTop: '20px'}}
                     width='100' height='100' alt='Logo' 
                     src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;