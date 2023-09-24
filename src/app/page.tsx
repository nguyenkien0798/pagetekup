import Image from 'next/image'
import Header from '../app/components/Header'
import Tabs from '../app/components/Tab'
import ContactUs from '../app/components/ContactUs'
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <div className=''>
      <Header />
      <Tabs />
      <ContactUs />
      <Footer />
    </div>
  )
}
