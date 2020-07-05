import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    return(
        <div>
            <p className='f4'>
                This will detect faces in your pictures. Try it Out
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type='text' 
                    className='f4 pa2 w-75 center' 
                    onChange={onInputChange} />
                    <button 
                    className=' w-25 grow f4 link 
                    ph3 pv2 dib white bg-light-purple'
                     onClick={onButtonSubmit} 
                     >DETECT</button>
                </div>
            </div>
            
        </div>
    );
}
export default ImageLinkForm;