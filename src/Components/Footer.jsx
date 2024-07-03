import React from 'react'

const Footer = () => {
    React
    return (
        <>
            <div className='container mx-auto my-20 md: p-3    '>
                
                <div className=' lg: flex justify-evenly mx-auto md:flex md:justify-evenly '>
                    <div className=' lg: flex-col  text-sm text-Pink-200 leading-10 md:'>
                        <a href=""><p className='hover:text-White'>Useful Links</p></a>
                        <a href=""><p className='hover:text-White'>Partners</p></a>
                        <a href=""><p className='hover:text-White'>Become our Partner</p></a>

                    </div>
                    <div className=' lg: flex-col  text-sm text-White leading-10 md:  '>
                        <a href=""><p className='hover:text-Pink-200'>Cruise Community</p></a>
                        <a href=""><p className='hover:text-Pink-200'>Join our Community</p></a>
                        <a href=""><p className='hover:text-Pink-200'>Producers & Artistes</p></a>
                    </div>
                    <div className=' lg: flex   md: flex-col w-auto justify-evenly'>

                        <a href=""> <svg class="w-6 h-6 text-Pink-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                        </svg>
                        </a>

                        <a href="" ><svg class="w-6 h-6 text-Pink-200 dark:text-white rounded-md" xmlns="http://www.w3.org/2000/svg" width="500" height="full" fill="none" viewBox="0 0 500 300" id="twitter"><g clip-path="url(#clip0_84_15698)"><rect width="500" height="500" fill="currentColor" rx="60"></rect><path fill="#000" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="500" height="500" fill="#fff"></rect></clipPath></defs></svg></a>

                        <a href=""><svg class="w-6 h-6 text-Pink-200 dark:text-white rounded-2xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="dribbble" fill="currentColor"><path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 15c-3.86 0-7-3.141-7-7 0-3.86 3.14-7 7-7 3.859 0 7 3.14 7 7 0 3.859-3.141 7-7 7z"></path><path d="M11.828 3.38A5.974 5.974 0 0 0 8 2c-.42 0-.83.044-1.226.126a28.5 28.5 0 0 1 1.971 3.219 14.119 14.119 0 0 0 3.083-1.965zM9.911 7.901a11.18 11.18 0 0 1 4.08-.071 5.966 5.966 0 0 0-1.45-3.744 15.224 15.224 0 0 1-3.363 2.148c.263.548.507 1.103.733 1.667zM5.77 2.433a6.003 6.003 0 0 0-3.611 4.215 14.156 14.156 0 0 0 5.653-.924A27.345 27.345 0 0 0 5.77 2.433zM8.26 6.629a15.052 15.052 0 0 1-5.463 1.043c-.259 0-.519-.016-.779-.03C2.011 7.761 2 7.879 2 8c0 1.473.533 2.821 1.414 3.865A11.25 11.25 0 0 1 8.936 8.15a26.757 26.757 0 0 0-.676-1.521zM10.278 8.848c.477 1.33.851 2.697 1.125 4.091a5.993 5.993 0 0 0 2.533-4.108 10.193 10.193 0 0 0-3.658.017zM4.124 12.576a5.97 5.97 0 0 0 6.363.879A27.216 27.216 0 0 0 9.296 9.08a10.241 10.241 0 0 0-5.172 3.496z"></path></svg></a>

                    </div>
                    <div className=' lg: flex   md: flex-col w-auto justify-evenly' >
                        <a href=""><svg class="w-6 h-6 text-Pink-200 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="instagram" fill='currentColor'><path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"></path></svg></a>

                        <a href=""><svg class="w-6 h-6 text-Pink-200 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="email" fill='currentColor'><path d="M34.05 50 9 66.31V33.69L34.05 50zm31.9 0L91 66.31V33.69L65.95 50zm-3.66 2.39-11.2 7.29c-.33.21-.71.32-1.09.32s-.76-.11-1.09-.32l-11.2-7.29L10.66 70l-1.57 1.02C9.58 73.84 12.04 76 15 76h70c2.96 0 5.42-2.15 5.91-4.98L89.33 70 62.29 52.39zM50 55.61 89.33 30l1.58-1.02C90.42 26.15 87.96 24 85 24H15c-2.96 0-5.42 2.16-5.91 4.98L10.66 30 50 55.61z"></path></svg></a>

                        <a href=""><svg class="w-6 h-6 text-Pink-200 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="social-media" fill='currentColor'><g><path d="M27 .45H5A4.56 4.56 0 0 0 .45 5v12.42a.5.5 0 0 0 1 0V5A3.56 3.56 0 0 1 5 1.45h22A3.56 3.56 0 0 1 30.55 5v5a.5.5 0 1 0 1 0V5A4.56 4.56 0 0 0 27 .45zM1 22.27a.5.5 0 0 0 .5-.5v-1.25a.5.5 0 0 0-1 0v1.25a.5.5 0 0 0 .5.5z"></path><path d="M30.84 28.36a.5.5 0 0 0-.67.22 3.69 3.69 0 0 1-.28.46A3.56 3.56 0 0 1 27 30.55h-8.62V19.82h4.94l.93-5.82h-5.87V9.71a1.11 1.11 0 0 1 1.11-1.11H26V2.73h-7.62a5.87 5.87 0 0 0-5.87 5.87V14H7.58v5.87h4.93v10.68H5A3.56 3.56 0 0 1 1.45 27v-3.29a.5.5 0 0 0-1 0V27A4.56 4.56 0 0 0 5 31.55h22A4.56 4.56 0 0 0 31.07 29a.5.5 0 0 0-.23-.64Z"></path><path d="M31 14.53a.5.5 0 0 0-.5.5V27a.5.5 0 0 0 1 0V15a.5.5 0 0 0-.5-.47zm0-2.88a.5.5 0 0 0-.5.5v1.55a.5.5 0 0 0 1 0v-1.55a.5.5 0 0 0-.5-.5z"></path></g></svg></a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;