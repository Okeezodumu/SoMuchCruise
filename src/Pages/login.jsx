import React from 'react'


const login = ({ isOpen, onClose, children }) => {
    React
    if (!isOpen) return null;
    return (
       
        <div className='container'> 
    
             <div className='fixed inset-0 flex items-center justify-center z-50 bg-lightPurple-500'>
          <div className='   relative right-14 rounded-lg w-1/6 bg-Purple shadow-lg'>
          {children}
            
         
            </div>
            </div>
        </div>



    );
};

export default login;