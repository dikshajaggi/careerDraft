import React from 'react'
import Button from '../components/Button'
import heroImage from "../assets/heroImage.png"
import {cardData} from "../static/cardData"
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { templates } from '../static/templateData'

const Section1 = () => {
  return (
    <section className='h-fit flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 mb-10 md:mb-16'>
      <div className='w-full md:w-1/2 space-y-4 text-center md:text-left'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold'>
            Create a <span className='text-primary'>Professional</span>
          </h1> 
          <h1 className='text-3xl md:text-4xl font-bold'>
            <span className='text-primary'>Resume</span> in Minutes!
          </h1>
        </div>
        <p className='text-light-text text-sm md:text-base'>
          Easy-to-use templates, AI-powered suggestions, and one-click downloads.
        </p>
        <p className='text-light-text text-sm md:text-base'>
          Already have a resume? <span className="font-bold text-primary">Get it analyzed instantly</span> for ATS optimization and expert feedback!
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
          <Link to="/build-resume"><Button text="Build My Resume Now" /></Link>
          <Link to="/analyze-resume"><Button text="Analyze My Resume" variant="secondary" /></Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-3/4 md:w-145 h-auto" src={heroImage} alt="hero-image" />
      </div>
    </section>
  )
}


const Section2 = () => {
  return (
    <section className="flex flex-col space-y-5 px-6 md:px-16 mb-10 md:mb-16">
    <h1 className="text-center text-2xl md:text-3xl font-bold">Powerful Features for Your Success</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {cardData.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  </section>
  )
}

const Section3 = () => {
  return (
    <section className="flex flex-col space-y-5 px-6 md:px-16 mb-10 md:mb-16">
      <h1 className="text-center text-2xl md:text-3xl font-bold">Explore Professional Resume Templates</h1>
      <p className='text-light-text text-sm md:text-base text-center'>Explore a variety of expertly designed resume templates tailored for different industries and career levels</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full bg-primary py-10">
        {templates.map(item => <Link to = {`/build-resume/${item.id}`}> <img className="w-full max-w-xs md:max-w-sm h-auto mx-auto" src={item.image} alt={item.id} /></Link> 
        )}
      </div>
  </section>
  )
}

const Section4 = () => {
  return (
    <section className="flex flex-col space-y-5 px-6 md:px-16 mb-10 md:mb-16">
      <h1 className="text-center text-2xl md:text-3xl font-bold">Get Your Resume Analyzed Instantly!</h1>
      <p className='text-light-text text-sm md:text-base text-center'>
        Upload your resume and receive AI-powered feedback on formatting, keywords, and job relevance. 
        Optimize your resume for ATS and increase your chances of landing your dream job!
      </p>
      <div className="flex justify-center">
        <Link to="/analyze-resume">
          <Button text="Analyze My Resume Now" />
        </Link>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default Home
