import React from 'react'
import { DayPicker } from '@/components/daypicker'
import KpiCards from '@/components/kpi-cards'
import { Activity, ArrowUp,MessageCircle, TrendingUp } from 'lucide-react'
import { Chart1 } from '@/components/insights-chart1'
import { Chart2 } from '@/components/insights-chart2'
import  Card1  from '@/components/insights-card'
import { SearchableTable } from '@/components/searchable-table'


export default function Home() {
  return (
    <section className='font-inter p-4 shadow border border-gray-200 rounded-[20px]'>
      
      <div className='flex justify-between items-center px-[24px] pt-[32px] pb-[16px]'>
        <h1 className='font-inter font-medium text-[32px] text-[#212636]' >At a glance</h1>
        <DayPicker/>
      </div>
      <div className='px-[24px] py-[32px]'>
        <KpiCards/>
      </div>
      
      
      <div className='flex justify-between items-center px-[24px] pt-[32px] pb-[16px]'>
        <h1 className='font-inter font-medium text-[32px] text-[#212636]'>Insights</h1>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-4 gap-4 '>
        <div className='col-span-1 sm:col-span-2 lg:col-span-2'><Chart1/></div>
        <div className='col-span-1'><Chart2/></div>
        <div className='col-span-1'>
          
          <Card1
          title={'FORECASTS'} 
          content1={'forecasted increase in your sales closed by the end of the current month'} 
          content2={'forecasted increase in consultations by the end of the current month'} 
          icon={MessageCircle} 
          trendIcon={TrendingUp} 
          value1='+15%' 
          value2='+20%'/>
        </div>
        
      </div>
      <div className='flex justify-between items-center px-[24px] pt-[32px] pb-[16px]'>
        <h1 className='font-inter font-medium text-[32px] text-[#212636]'>Orders</h1>
      </div>
      
      <div className='flex-1 justify-between items-center px-[24px] pt-[32px] pb-[16px]'>
        <SearchableTable/>    
      </div>

      



      
    </section>
   
  )
}
