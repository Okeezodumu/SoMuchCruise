import React from 'react'

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <div className="block lg:hidden">
        <button
        onClick={(e) => {
          toggleMenu();
          e.preventDefault(); // Prevent default link behavior
        }}
        className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6ZM4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14C3 13.4477 3.44772 13 4 13ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
          />
        </svg>
      </button>
    </div>
  );
};
    </div>
    
  )
}

export default Hamburger