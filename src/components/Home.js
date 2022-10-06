import React from 'react'
import icon from '../images/icon-star.svg';
import RatingBtn from './RatingBtn'

const Home = (props) => {
  return (
    <div className="p-6 mx-auto bg-[#212832] rounded-xl w-96">
        <div className="p-4 shadow-sm bg-[#273039]  w-12 h-12 rounded-full mb-8">
          <img src={icon} alt="star icon" />
        </div>
        <h1 className="text-3xl text-white mb-3">How did we do? </h1>
        <p className="text-xl text-slate-500 text-base">Please let us know how we did with your support request. Alle feedback is appreciated to help us improve our offering!</p>
        
        <ul className="list-none flex mt-6">
          {props.rating.map((num, index) => (
            <li className="mr-4" key={index} onClick={() => props.onClickRBT(num) }>
              <RatingBtn num={num} />
            </li>
          ))}
        </ul>

        <div className="mt-6">
            <button type="button" className="p-3 text-sm leading-5 rounded-full font-semibold bg-[#fc7710] text-white hover:bg-white hover:text-[#fc7710] w-full tracking-[.15em]" onClick={() => props.onSubmit() }> 
                SUBMIT
            </button>
        </div>

    </div>
  )
}

export default Home