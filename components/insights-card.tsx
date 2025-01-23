import React from 'react'
import { LucideIcon } from 'lucide-react'

interface CardProps {
    title: string; 
    content1: string; 
    content2: string;
    icon: LucideIcon; 
    trendIcon: LucideIcon; 
    value1: string; 
    value2: string;
  }

export default function Card1({
    title,
    content1,
    content2,
    icon: Icon,
    trendIcon: TrendIcon,
    value1,
    value2,
  }: CardProps) 
  {

  return (   
    
    <div className="border rounded-lg shadow-md p-[24px]  flex flex-col gap-[24px] h-full bg-gradient-to-r from-[#15B79F] to-[#0E9382] relative overflow-hidden -z-[-5]">
          {/* Small Circle */}
      <div className="absolute w-[300px] h-[300px] bg-[#2BB9A5] rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
      
      {/* Medium Circle */}
      <div className="absolute w-[500px] h-[500px] bg-[#3ABBA9] rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      {/* Large Circle */}
      <div className="absolute w-[700px] h-[700px] bg-[#35B6A4] rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
      <div className='flex items-center gap-[8px] font-inter font-semibold text-[12px] text-white z-10'><Icon className="inline mr-2" /> {title}</div>
      <div className='text-[14px] text-white z-10'>{content1}</div>
      <div className='text-[56px] text-white z-10'> {value1} <TrendIcon className="inline mr-2" /></div>
      <div className='text-[14px] text-white z-10'>{content2}</div>
      <div className='text-[56px] text-white z-10'> {value2} <TrendIcon className="inline mr-2" /></div>
      
    </div>
          
       
  )
}
