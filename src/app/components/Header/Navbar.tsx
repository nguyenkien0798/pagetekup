import react from 'react'
import classNames from 'classnames'
import Logo from '/public/logo-tekup-02.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const routes = [
  {
    name: 'home',
    pathNames: ['/'],
    path: '/',
  },
  {
    name: 'about us',
    pathNames: ['/about-us', '/dich-vu'],
    path: '/about-us',
  },
  {
    name: 'services',
    pathNames: ['/services', '/dich-vu'],
    path: '/services',
  },
  {
    name: 'projects',
    pathNames: ['/projects', '/du-an'],
    path: '/projects',
  },
  {
    name: 'contact',
    pathNames: ['/contact'],
    path: '/contact',
  },
  {
    name: 'blog',
    pathNames: ['/blog'],
    path: '/blog',
  },
  // {
  //   name: '',
  //   pathNames: [''],
  //   path: '/bookProject',
  // },
]

export default function Navbar() {

  return (
    <div className=''>
      <div className='relative flex justify-center w-full'>
        <div
          className={classNames(
            'absolute container px-[20px] py-[8px] top-[5%] jutify-center w-[80%] rounded-[5px] z-[1000] bg-white font-montserrat transition-all duration-500'
          )}
        >
          <div
            className={classNames(
              'flex h-14 items-center justify-between'
            )}
          >
            <a href='/' className="flex items-center h-[40px] w-[120px]">
              <img src='/logo-tekup-02.png' alt="Vercel Logo" />
            </a>

            <ul
              className={`
              relative hidden items-start space-x-0 space-y-10 lg:flex lg:items-center lg:space-x-[2.25rem] lg:space-y-0 2xl:space-x-8 3xl:space-x-[60px]
            `}
            >
              {routes.map((x) => {
                return (
                  <li
                    key={x.path}
                    className={`group relative cursor-pointer font-montserratFontwight6 text-[14px] font-bold capitalize leading-[24px] tracking-wider transition duration-300 
                    
                    `}
                  >
                    {x.name}
                    <span className="block h-1 max-w-0 bg-yellow transition-all duration-400 group-hover:max-w-full"></span>
                  </li>
                )
              })}
                <button className='bg-yellow px-[12px] py-[10px] rounded-[4px] font-bold m-0'>
                  <MailOutlineIcon sx={{ mr: 1 }}/>Contact Us
                </button>
            </ul>
          </div>

        </div>

        <video className='w-full h-full' autoPlay muted loop>
          <source  src='/thien-nhien.mp4' type="video/mp4" />
        </video>
        <div className='absolute top-0 z-[999] w-full h-full bg-black/90'></div>

        <div className='absolute w-full top-[15%] px-[160px] flex justify-between items-center z-[1000]'>
          <p className='text-white text-[14px]'><LocationOnIcon />Da Nang, Viet Nam</p>
          <p className='text-white text-[14px]'>Follow us on<FacebookIcon sx={{ ml: 1 }} /><LinkedInIcon sx={{ ml: 1 }} /></p>
        </div>
        <div className='absolute top-[40%] z-[1000] w-full text-white text-[64px] font-bold text-center'>
          Projects
        </div>
      </div>
    </div>
  )
}