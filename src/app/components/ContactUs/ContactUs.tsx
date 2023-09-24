import React from 'react'

const ContactUs = () => {


  return (
    <div className="relative px-[100px]">
      <div className='flex justify-center'>
        <img className='w-[60%] text-center' src="/world.png" alt="world" />
      </div>
      <div className='absolute top-[35%] h-[250px] bg-yellow w-[87%] z-[1000] rounded-[10px]'>
        <div className='flex justify-around items-center pt-[65px]'>
          <div className='w-[15%]'>
            <img className='absolute top-[-50px] left-[100px] w-[200px] h-[300px]' src="/rocket.png" alt="rocket" />
          </div>
          <div className='w-[50%]'>
            <p className='mb-[16px] w-full text-[28px] font-bold'>Are you ready to share your ideas, your projects with us?</p>
            <p>Let your project summaries come true by calling Tekup or sending Tekup emails .</p>
          </div>
          <div className='mr-[30px]'>
            <button className='flex items-center px-[16px] py-[16px] text-yellow bg-black rounded-[5px] hover:text-[#ac9000]'>
              <img className='w-[30px] h-[30px] mr-[8px] hover:text-[#ac9000]' src="/upload.png" alt="" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;