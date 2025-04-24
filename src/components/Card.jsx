import React from 'react'

const Card = ({data}) => {
    return (
        <div className="rounded-lg border-borderclr border-2 p-6 flex flex-col justify-evenly capitalize text-center dark:text-dark-text">
            <img src={data.icon} alt="icon" className='w-10 m-auto mb-4'/>
            <h4 className="font-bold text-lg">{data.heading}</h4>
            <p className="text-light-text text-sm dark:text-dark-text">{data.desc}</p>
        </div>
      );
}

export default Card
