import Nav from './components/Nav'
import Header from './components/Header'
import Popularity from './components/Popularity'
import Discover from './components/Discover'
import AboutUs from './components/About'
import Packages from './components/Packages'
import Review from './components/Review'
import Contacts from './components/ContactUs'

export default function HomePage() {
    return (
      <>
        <Nav/>
        <Header/>
        <Popularity/>
        <Discover/>
        <AboutUs/>
        <Packages/>
        <Review/>
        <Contacts/>
      </>
    )
  }