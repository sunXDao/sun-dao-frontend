import SwapNavBar from '@/components/Swap/SwapNavBar'
import React from 'react'

export default function SwapLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='h-screen grid grid-cols-[0.25fr_1fr]'>
      <SwapNavBar/>
      {children}
    </div>
  )
}
