import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import '../styles/scss/globals.scss';

export const metadata: Metadata = {
  title: 'TCC Pedro',
  description: 'Developed by Pedro Grimaldi',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        
      </body>
    </html>
  )
}
