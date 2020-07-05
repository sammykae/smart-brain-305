import React from 'react';

const Navigation=({route,onRouteChange})=>{
    let text= ''
    let goto=''
    if (route==='signin') {
        text='Register'
        goto='register'
    }else if (route==='register') {
        text='Sign In'
        goto='signin'
    }else{
        text='Sign Out'
        goto='signin'
    }
    
    return(
        <nav style={{display: 'flex',justifyContent: 'flex-end'}}>
            <p  onClick={()=>onRouteChange(goto)}  className='f4 link dim white grow pa3 pointer'>{text}</p>
        </nav>
    );
}

export default Navigation;