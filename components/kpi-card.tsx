import React from 'react'
import { LucideIcon } from 'lucide-react'

interface CardProps {
    title: string; 
    content: string; 
    icon: LucideIcon; 
    trendIcon: LucideIcon; 
    value: string; 
    isIncrease: string;
  }

export default function KpiCard({
    title,
    content,
    icon: Icon,
    trendIcon: TrendIcon,
    value,
    isIncrease,
  }: CardProps) 
  {

  return (   
    
    <div className="border rounded-[20px] shadow-md p-[24px] flex flex-col gap-[8px]">
      <div className='flex items-center gap-[8px] font-inter font-semibold text-[12px] text-[#667056]'><Icon className='inline' size={"12"} /> {title}</div>
      <div className='text-[32px] text-[#212636]' >{content}</div>
      <div className='font-inter text-[14px] text-[#667085] font-normal '>
      {isIncrease ? <><TrendIcon className="inline mr-2 text-green-500 " /><span className="text-green-500"> {value}  </span><span>increase</span></>: <><TrendIcon className="inline mr-2 text-red-500" /><span className="text-red-500"> {value} </span><span>decrease</span></>}
      </div>
      
    </div>
          
       
  )
}
