import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "./providers";
import Nav from './components/Nav';
const inter = Inter({ subsets: ['latin'] })
import '@radix-ui/themes/styles.css';
import Footer from './components/Footer';


export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
   
    <html lang="en">
       
      <body className={inter.className}>
      <Providers>
      <Nav />
        {children}
         </Providers>
         <Footer />
        </body>
        
    </html>
   
  )
}
