import React, { useState } from "react";
import RatingBtn from './RatingBtn'


const Home = (props) => {
  const [activebtn, setActivebtn] = useState(null)
  return (
    <div className="p-6 mx-auto bg-[#212832] rounded-xl w-96">
        <div className="p-4 shadow-sm bg-[#273039]  w-12 h-12 rounded-full mb-8">
          <img src="data:image/svg+xml,%3Csvg width='17' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z' fill='%23FC7614'/%3E%3C/svg%3E" alt="star icon" />
        </div>
        <h1 className="text-3xl text-white mb-3">How did we do? </h1>
        <p className="text-xl text-slate-500 text-base">Please let us know how we did with your support request. Alle feedback is appreciated to help us improve our offering!</p>
        
        <ul className="list-none flex mt-6">
          {props.rating.map((num, index) => (
          <li 
            key={index} 
            className={`mr-4 ${activebtn === num && 'active'}`} 
            onClick={() => {
              props.onClickRBT(num)
              setActivebtn(num)
            }
          }>
              <RatingBtn num={num}  />
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