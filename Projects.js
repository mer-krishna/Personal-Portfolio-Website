import React from 'react';
import SectionTital from '../../components/SectionTital';
import { projects } from '../../Resources/projects';


function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTital tital="Projects" />

            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-5/6 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                            className='cursor-pointer'
                        >
                            <h1
                                className={`text-xl  px-5 ${selectedItemIndex === index
                                    ? 'text-[#54D6BB] border-[#54D6BB] border-l-4 -ml-[3px] bg-[#18848345] py-3 sm:w-full'
                                    : 'text-white hover:text-[#54D6BB]'
                                    }`}
                            >
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-10'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[#F97316] text-2xl'>{projects[selectedItemIndex].title}</h1>
                    <p className='text-white'>{projects[selectedItemIndex].description}</p>


                </div>

                </div>
            </div>
        </div>
    )
}

export default Projects