import React from 'react'
import SectionTital from '../../components/SectionTital'


function Contact() {
    const user = {
        name: "Krishna Mer.V",
        age: "21",
        gender: "Female",
        email: "merkrishna882@gmail.com",
        mobile: "8866077938",
        country: "India",

    }
    return (
        <div>
            <SectionTital tital="Say Hello" />

            <div className='flex sm:flex-col items-center'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#54D6BB]'>{'{'}</p>
                    {Object.keys(user).map((key) => (
                        <p className='ml-5'>
                            <span className="text-[#54D6BB]">{key} : </span>
                            <span className="text-[#54D6BB]">{user[key]} </span>
                        </p>
                    ))}
                    <p className='text-[#54D6BB] text-sm'>{'}'}</p>
                </div>


            </div>
        </div>
    )
}

export default Contact