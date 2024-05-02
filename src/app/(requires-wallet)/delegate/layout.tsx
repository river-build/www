import { DelegateFooter } from '@/components/delegate/delegate-footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delegate',
}

const DelegateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <DelegateFooter />
    </>
  )
}

export default DelegateLayout
