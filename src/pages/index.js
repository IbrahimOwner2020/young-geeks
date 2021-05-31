import * as React from "react"
import Hero from "../components/Hero/Hero"
import Navigation from "../components/Navigations/Navigation"
import Overrall from "../components/Overrall"

// MARKUP
const HomePage = () => {
  return(
    <main>
      <title>YoungGeeks</title>
      <Overrall />
      <Hero>
        <Navigation home />
      </Hero>
    </main>
  )
}

export default HomePage