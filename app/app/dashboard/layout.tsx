import AppNavBar from '@/components/App/AppNavBar'
import AppNavHeader from '@/components/App/AppNavHeader'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen grid grid-cols-[0.2fr_1fr]'>
      <AppNavBar />
      <div className="py-10 px-8">
        <AppNavHeader />
        {children}
      </div>
    </div>
  )
}
