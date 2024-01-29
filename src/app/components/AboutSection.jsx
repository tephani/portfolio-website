import React from 'react'
import Image from 'next/image'


const AboutSection = () => {
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/images/about-me.png' alt='hero-section image' width={500} height={500} />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Sed risus ultricies tristique nulla aliquet enim tortor at. Purus in mollis nunc sed. Ut venenatis tellus in metus vulputate. Orci ac auctor augue mauris augue neque.</p>
          <div className='flex flex-row mt-8'>
            <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-red-500'>Skills</span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection