import React from 'react'

const SideBarLink = ({Icon,text,active}) => {
  return (
    <div className={`text-[#d9d9d9] cursor-pointer flex items-center justify-center xl:justify-start text-xl space-x-3 hover:bg-[#d9d9d9] hover:bg-opacity-10 rounded-full  w-[52px] h-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition duration-200 ease-out ${active&& "font-bold"}`}>
        <Icon className="h-7 text-white"/>
        <span className='hidden xl:inline'>{text}</span>
    </div>
  )
}

export default SideBarLink;