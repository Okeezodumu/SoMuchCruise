import React from 'react'

const Footer = () => {
    React
    return (
        <>
            <div className='container m-auto '>
                <div className='flex justify-evenly m-10 '>
                    <div className=' lg: flex-col  text-sm text-Pink-200    leading-10 md: w-auto'>
                        <a href=""><p className='hover:text-White'>Useful Links</p></a>
                        <a href=""><p className='hover:text-White'>Partners</p></a>
                        <a href=""><p className='hover:text-White'>Become our Partner</p></a>

                    </div>
                    <div className=' lg: flex-col  text-sm text-White leading-10 md: w-auto mx-2'>
                        <a href=""><p className='hover:text-Pink-200'>Cruise Community</p></a>
                        <a href=""><p className='hover:text-Pink-200'>Join our Community</p></a>
                        <a href=""><p className='hover:text-Pink-200'>Producers & Artistes</p></a>
                    </div>
                    <div className=' lg: flex   md: flex-col w-auto'>
                        <a href=""><img className='lg: md: w-1/2 h-10 rounded-xl m-2' src="https://img.freepik.com/free-psd/glowing-youtube-logo-realistic-3d-circle_125540-2096.jpg?w=740&t=st=1702319641~exp=1702320241~hmac=d477d8128e0cbdfb460173106b2a3947268b82ffe345246d8207903385ccd5b0" alt="" /></a>
                        <a href=""><img className='lg: md: w-1/2 h-10 rounded-xl m-2' src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=740&t=st=1702319811~exp=1702320411~hmac=41b52ab02229e2891fdbd53707c5c2b4cdf1b085320cb1676a65db6ab9505f41" alt="" /></a>
                    </div>
                    <div className=' lg: flex   md: flex-col w-auto '>
                        <a href=""><img className='lg: md: w-1/2 h-10 rounded-xl m-2' src="https://img.freepik.com/free-psd/black-white-circular-twitter-logo-isolated-transparent-background_125540-3685.jpg?w=740&t=st=1702319874~exp=1702320474~hmac=157cedb4e109447e76c1b2f5175862b571674b5239ef8afa891f7cc83981a77b" alt="" /></a>
                        <a href=""><img className='lg: md: w-1/2 h-10 rounded-xl m-2' src="https://img.freepik.com/free-vector/mail-illustration_24908-54790.jpg?w=740&t=st=1702319973~exp=1702320573~hmac=cc7589ab4746728d3f20bc0fdd1e30c09c8209ca43a9c615354419f5efefe4da" alt="" /></a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer