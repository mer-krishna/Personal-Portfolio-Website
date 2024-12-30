import React from 'react'
import SectionTital from '../../components/SectionTital'

function About() {
    const skills=[
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB",
    ]
    return (
        <div>
            <SectionTital tital="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[70vh] w-1/2 sm:w-full'>

                    <dotlottie-player
                        src="https://lottie.host/3b3e7238-e56c-452d-8db6-e76308cc961e/cIkgQN1WoW.lottie"
                        background="transparent"
                        speed="1"
                        autoplay>

                    </dotlottie-player>

                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-white'>
                        Hello! My name is Krishna Mer. I enjoy creating things that live on the internet.
                        My interest in web development started back in 2023.
                        And now I love to create websites with different ideas.
                    </p>
                    <p className='text-white'>
                        Recently, I am creating Projects on different ideas.
                        I also work with Social Media platforms. I have my own Instagram page of my projects.
                        I create content related to my projects and post them for Social Growth.
                    </p>

                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-[#54D6BB] text-xl'>Here are a few technologies I've been working with recently:
                </h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                {skills.map((skill, index) => (
                 <div className='border border-[#54D6BB] py-2 px-5'>
                    <h1 className='text-[#54D6BB]'>{skill}</h1>
                 </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default About