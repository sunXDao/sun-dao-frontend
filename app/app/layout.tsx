import AppNavBar from '@/components/App/AppNavBar'
import Providers from './providers'
import AppNavHeader from '@/components/App/AppNavHeader'

export default function SwapLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen grid grid-cols-[0.2fr_1fr]'>
      <AppNavBar />
      <Providers>
        <div className="py-10 px-8">
          <AppNavHeader />
          {children}
        </div>
      </Providers>
    </div>
  )
}
