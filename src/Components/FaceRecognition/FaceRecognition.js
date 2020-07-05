import React from 'react'
import './FaceRecognition.css'
const FaceRecognition =({imageUrl,box})=>{
    const display=imageUrl===''? 'none':null
    
    return(
        <div className='center ma'>
              <div className='absolute nt2'>  
                  <img id='inputImage' style={{display:display}} alt='face' src={imageUrl} width='500px' height='auto'/>
                  <div className='face-box' style={{top: box.topRow, right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div>

              </div>
        </div>
    )
}

export default FaceRecognition