import React from 'react'

const RatingBtn = (props) => {
  return (
    <button className="text-white bg-[#273039] w-12 h-12 rounded-full flex justify-center items-center hover:bg-[#7c8898] active:bg-[#fc7710] cursor-auto">
     <span>{props.num}</span>
    </button>
  )
}

export default RatingBtn
