import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { ApiSettings } from "./components/settings/ApiSettings"
import "./styles/globals.css"

function App() {
  return (
    <div className="bg-hero-bg min-h-screen font-sora antialiased">
      <Navbar />
      <HeroSection />
      <div id="trial">
        <ApiSettings />
      </div>
    </div>
  )
}

export default App