import React from 'react'
import KpiCard from '@/components/kpi-card'
import { Activity, ArrowUp,MessageCircle,TrendingUp,TrendingDown,Check,Tag,Coins, PiggyBank } from 'lucide-react'

export default function KpiCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <KpiCard 
        title="CONSULTATIONS"
        content="20"
        icon={MessageCircle}
        trendIcon={TrendingUp}
        value="15%"
        isIncrease="up"
      />
      <KpiCard 
        title="ORDERS PLACED"
        content="12"
        icon={Tag}
        trendIcon={TrendingDown}
        value="15%"
        isIncrease=""
      />
      <KpiCard 
        title="CONVERSION"
        content="50%"
        icon={Check}
        trendIcon={TrendingDown}
        value="15%"
        isIncrease=""
      />
      <KpiCard 
        title="TOTAL SALES VALUE"
        content="$2400"
        icon={Coins}
        trendIcon={TrendingDown}
        value="15%"
        isIncrease="up"
      />
      <KpiCard 
        title="AVG ORDER VALUE"
        content="$240"
        icon={Coins}
        trendIcon={TrendingUp}
        value="15%"
        isIncrease="up"
      />
      <KpiCard 
        title="COMMISION PAID"
        content="$240"
        icon={PiggyBank}
        trendIcon={TrendingUp}
        value="15%"
        isIncrease="up"
      />
      </div>
    
  )
}
