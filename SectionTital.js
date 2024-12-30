import React from 'react'

function SectionTital({
    tital,
}
    
) {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-3xl text-[#F97316] font-semibold'>{tital}</h1>
        <div className='w-60 h-[2px] bg-[#54D6BB]'>
        </div>
    </div>
  )
}

export default SectionTital