import React from 'react';
import { useState } from 'react';


function Watermark(props) {
    const [showMessage, setShowMessage] = useState(false);

  const handleToggle = () => {
    setShowMessage(!showMessage);

    
  }
  return (
    <div>        
        <button className='water-button'
            onClick={handleToggle}>Watermark
        </button>

            {showMessage && 
            <h1 
                className='water'>
                This site is built by Bhaskar
            </h1>}
        
    </div>
  );
}

export default Watermark;
