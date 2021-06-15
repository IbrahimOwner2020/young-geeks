import * as React from "react"
import Hero from "../components/Hero/Hero"
import Highlights from "../components/Highlights/Highlights"
import Marketing from "../components/Marketing/Marketing"
import Navigation from "../components/Navigations/Navigation"
import Overrall from "../components/Overrall"
import Portfolio from "../components/Portfolio/Portfolio"
import Services from "../components/Services/Services"
import Talk from "../components/Talk/Talk"
import HeroTypo from "../components/Typography/HeroTypo"
import Testimony from "../components/Testimony/Testimony"
import Workers from "../components/Workers/Workers"
import Footer from "../components/Footer/Footer"

// MARKUP
const HomePage = () => {
  return(
    <main>
      <title>YoungGeeks</title>
      <Overrall />
      <Hero>
        <Navigation home />
        <HeroTypo />
      </Hero>
      <Services />
      <Marketing />
      <Highlights />
      <Talk />
      <Portfolio />
      <Testimony />
      <Workers />
      <Footer />
    </main>
  )
}

export default HomePage