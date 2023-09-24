import React from 'react'

const Footer = () => {


  return (
    <div className='bg-gray px-[100px] py-[48px]'>
      <div className='flex justify-between pb-[48px]'>
        <div className='w-[60%]'>
          <img src="/logo-tekup-02.png" alt="logo" />
          <p className='text-[#6c757d] mt-[18px]'>Strategic Products – Transformative Business</p>
        </div>
        <div className='w-[30%]'>
          <p className='font-bold'>Company</p>
          <p className='mt-[16px] text-[#6c757d] hover:cursor-pointer'>About Tekup</p>
          <p className='mt-[16px] text-[#6c757d] hover:cursor-pointer'>Contact</p>
          <p className='mt-[16px] text-[#6c757d] hover:cursor-pointer'>Privacy Policy</p>
          <p className='mt-[16px] text-[#6c757d] hover:cursor-pointer'>Terms of use</p>
        </div>
        <div className='w-[30%]'>
          <p className='font-bold'>Services</p>
          <p className='mt-[16px] text-[#6c757d] hover:cursor-pointer'>Comprehensive Solution Providing</p>
          <p className='mt-[16px] text-[#6c757d] hover:cursor-pointer'>Web / App Developing</p>
          <p className='mt-[16px] text-[#6c757d] hover:cursor-pointer'>IT Workforce Supply (OSDC)</p>
          <p className='mt-[16px] text-[#6c757d] hover:cursor-pointer'>UX/UI Design</p>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#E4E5E9]'></div>
      <div className='pl-[15px] pt-[10px]'>
        <p className='text-[#6c757d]'>© 2022 Tekup JSC</p>
      </div>
    </div>
  )
}

export default Footer;