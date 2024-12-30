import React from 'react'

function Intro() {
    return (
        <div className='h-[80vh] bg-[#0A192F] flex flex-col items-start justify-center gap-8 py-10 '>
            <h1 className='text-white'>Hi , I am</h1>
            <h1 className='text-5xl sm:text-3xl text-[#F97316] font-semibold'>Krishna Mer</h1>
            <h1 className='text-5xl sm:text-3xl text-white font-semibold'>I build things for the web.</h1>
            <p className='text-white w-2/3'>I am Fullstack Web Developer. Currently I am pursing B.Tech (Computer Science and Engineering).</p>
            <button className='border-2 border-[#54D6BB] text-[#54D6BB] px-8 py-2  rounded'>Get Started</button>

        </div>
    );
}

export default Intro