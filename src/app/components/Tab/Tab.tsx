'use client'
import { useState } from "react";
import classNames from 'classnames'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TabsAll = [
  {
    id: 1,
    content: 'TOI 3D Customize E-commerce',
    image: '/card-image.png'
  },
  {
    id: 2,
    content: 'E-learning – Internal training platform',
    image: '/card-image.png'
  },
  {
    id: 3,
    content: 'Summer 21 Cosmetic E-commerce Platform',
    image: '/card-image.png'
  },
  {
    id: 4,
    content: 'Kiva – Ambition to digital transformation in the brokerage assiduity',
    image: '/card-image.png'
  },
  {
    id: 5,
    content: 'Boxgo – Professional Warehouse Management',
    image: '/card-image.png'
  },
]

const TabsManpower = [
  {
    id: 1,
    content: 'Dsoft',
    image: '/dsoft.jpg'
  },
  {
    id: 2,
    content: 'MITC',
    image: '/mitc.jpg'
  },
  {
    id: 3,
    content: 'Tego',
    image: '/tego.jpg'
  },
  {
    id: 4,
    content: 'MOR',
    image: '/mor.jpg'
  },
  {
    id: 5,
    content: 'Code Complete',
    image: '/code-complete.jpg'
  },
  {
    id: 6,
    content: 'Smart Dev',
    image: '/smart-dev.jpg'
  },
]

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap px-[100px] my-[32px]">
        <div className="w-full text-center">
          <ul
            className="flex justify-center mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-lg font-bold px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "bg-yellow"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-lg font-bold px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ? "bg-yellow"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Manpower Supply
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-lg font-bold px-5 py-3 rounded block leading-normal " +
                  (openTab === 3
                    ? "bg-yellow"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Mobile App/Websites
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-lg font-bold px-5 py-3 rounded block leading-normal " +
                  (openTab === 4
                    ? "bg-yellow"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                UI/UX Design
              </a>
            </li>
          </ul>

          {/* ----------------Card--------------- */}
          <div className="grid grid-rows-2 grid-cols-3 gap-6 mt-[32px]">
            {openTab === 1 && TabsAll.map((item) => {
              return (
                <div className='relative hover:scale-[1.02] rounded-[5px] hover:cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' key={item.id}>
                  <img className="w-full rounded-[5px]" src={item.image} alt="image-card" />
                  <div className="absolute top-[80%] flex justify-between items-center w-[90%] mx-[20px] px-[10px] py-[10px] rounded-[8px] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <p className="text-left font-bold">{item.content}</p>
                    <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                  </div>
                </div>
              )
            })}

            {openTab === 2 && TabsManpower.map((item) => {
              return (
                <div className='relative hover:scale-[1.02] rounded-[5px] hover:cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' key={item.id}>
                  <img className="w-full rounded-[5px]" src={item.image} alt="image-card" />
                  <div className="absolute top-[85%] flex justify-between items-center w-[90%] mx-[20px] px-[10px] py-[10px] rounded-[8px] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <p className="text-left font-bold">{item.content}</p>
                    <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                  </div>
                </div>
              )
            })}

            {openTab === 3 && TabsAll.map((item) => {
              return (
                <div className='relative hover:scale-[1.02] rounded-[5px] hover:cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' key={item.id}>
                  <img className="w-full rounded-[5px]" src={item.image} alt="image-card" />
                  <div className="absolute top-[80%] flex justify-between items-center w-[90%] mx-[20px] px-[10px] py-[10px] rounded-[8px] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <p className="text-left font-bold">{item.content}</p>
                    <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                  </div>
                </div>
              )
            })}

            {openTab === 4 && TabsAll.map((item) => {
              return (
                <div className='relative hover:scale-[1.02] rounded-[5px] hover:cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' key={item.id}>
                  <img className="w-full rounded-[5px]" src={item.image} alt="image-card" />
                  <div className="absolute top-[80%] flex justify-between items-center w-[90%] mx-[20px] px-[10px] py-[10px] rounded-[8px] bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    <p className="text-left font-bold">{item.content}</p>
                    <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;