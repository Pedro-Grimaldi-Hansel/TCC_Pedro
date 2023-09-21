import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TCC Pedro',
  description: 'Developed by Pedro Grimaldi',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
