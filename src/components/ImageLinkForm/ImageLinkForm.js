import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onImageSubmit}) => {
    return (
        <div>
            <p className='f3'>{'SmartBrain will detect faces in the images! Give it a try!'}</p>
            <p className='f6'>{'Note: Try to use a .jpg'}</p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input type='tex' className='f4 pa2 w-70 center' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib bg-light-yellow' onClick={onImageSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;