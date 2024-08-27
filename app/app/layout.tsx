import AppNavBar from '@/components/App/AppNavBar'
import React from 'react'
import Providers from './providers'

export default function SwapLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen grid grid-cols-[0.25fr_1fr]'>
      <AppNavBar />
      <Providers>
        {children}
      </Providers>
    </div>
  )
}
