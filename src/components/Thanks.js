import React from 'react'
import thankyou from '../images/illustration-thank-you.svg';

const Thanks = (props) => {
  return (
    <div className="p-6 mx-auto bg-[#212832] rounded-xl w-96">
        <div className="p-4 flex justify-center items-center">
        <img src={thankyou} alt="Illustration Thank You" />
        </div>
        <div className="flex mt-4 mb-4">
        <p className="text-[#fc7710] bg-[#273039] pt-2 pb-2 pl-5 pr-5 rounded-full inline-block mx-auto">You selected {props.rate} out of {props.rating.length}</p>
        </div>
        <h1 className="text-3xl text-white mb-3 text-center">Thanks you!</h1>
        <p className="text-xl text-slate-500 text-base text-center">Please let us know how we did with your support request. Alle feedback is appreciated to help us improve our offering!</p>
    </div>
  )
}

export default Thanks