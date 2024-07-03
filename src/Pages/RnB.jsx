import React from 'react'

const RnB = ({ isOpen, onClose, children }) => {
    React
    if (!isOpen) return null;
  return (
    <div className='container'>
        
    <div className='fixed inset-0 flex justify-center '>
      <div className='absolute translate-y-24 my-10 pb-40 pt-20 bg-Silver-100 w-full md: translate-y-0   '>
      {children}
       

    
        </div>
       
        </div>
        
</div>
  )
}

export default RnB