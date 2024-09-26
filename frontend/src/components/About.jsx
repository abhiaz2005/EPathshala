import React from 'react'
import Navbar from './templates/Navbar'
import Footer from './templates/Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <Navbar/>
        <div className="max-w-screen-2xl container mx-auto leading-snug px-14 lg:px-20 mt-28 z-10 mb-14">
          <h1 className='text-4xl font-semibold sm:text-8xl '>Here the page goes About different Books &#9998;. <span className='text-green-200'>You can start your different chapters now &#9755; &#9755;&#9755;</span></h1>

          <p className='text-xl font-semibold sm:text-2xl mt-6 leading-9'>All the books are discovered here is all geninue.You can select all it's yours . Also you can visit our <Link to="/" className='text-green-200'>Home page</Link> for discovering some new courses .You can visit for your required book or if you want some courses provided by Indian legend teachers on <Link to="/courses" className='text-green-200'>courses</Link> section &#x276F; &#x276F; &#x276F; &#x276F; &#x276F;</p> 

          <h1 className='mt-20 mb-3 text-4xl md:text-6xl text-green-200 font-bold'>About us &#9997;</h1>
          <p className='text-xl font-semibold leading-9'>We are giving genuine books, ensuring authenticity with every title. Our platform is backed by India-wide trusted marks, so you can be confident in the quality and legality of every e-book you download. With a commitment to delivering only verified content, we prioritize reader trust and satisfaction on every level. Additionally, we partner with reputable publishers and authors to offer you a wide selection of books that are both reliable and legal. Our mission is to provide a safe, trusted reading experience for everyone, with no compromises on quality or integrity. <span className='text-green-500'>&#10004; &#10004;</span></p>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default About