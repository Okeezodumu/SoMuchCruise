import React from 'react'

const Afrobeats = ({ isOpen, onClose, children }) => {
    React
    if (!isOpen) return null;
  return (
    <div className='container'>
        
        <div className='fixed inset-0 flex justify-center '>
          <div className='absolute translate-y-24 my-10 pb-40 pt-20 bg-Black w-full md: translate-y-2   '>
          {children}
           
   
        
            </div>
           
            </div>
            
    </div>
  );
};
export default Afrobeats;