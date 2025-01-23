import React from 'react'
import { Button } from '@/components/ui/button'
import { ChartPie, Tag, MessageCircleMore } from 'lucide-react'


export default function Header() {
  return (
    <div className='flex justify-start items-center gap-4 py-[24px] px-[40px]'>
        <Button className="bg-[#CCFBEF] text-black rounded-full shadow-none hover:bg-[#CCFBEF] "><ChartPie/>  Summary</Button>
        <Button className="hover:bg-[#CCFBEF]  text-gray-500  hover:text-black rounded-full bg-white shadow-none"><Tag/>  Sales</Button>
        <Button className="hover:bg-[#CCFBEF]  text-gray-500  hover:text-black rounded-full bg-white shadow-none"><MessageCircleMore/>  Chats</Button>
    </div>
        
  )
}
