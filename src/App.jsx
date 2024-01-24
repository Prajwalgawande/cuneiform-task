import './App.css'
import Features from './Componenets/Features/Features'
import LatestEpisodes from './Componenets/LatestEpisodes/LatestEpisodes'
import Navbar from './Componenets/Navbar/Navbar'
import PopularPodcast from './Componenets/PopularPodcast/PopularPodcast'
import Review from './Componenets/Review/Review'
import TopSection from './Componenets/Top-Banner/TopSection'
function App() {

  return (
    <div>
    <Navbar/>
    <TopSection/>
    <PopularPodcast/>
    <div className="section-seperator"></div>
    <LatestEpisodes/>
    <div className="section-seperator"></div>
    <Features/>
    <div className="section-seperator"></div>
    <Review/>
    </div>
  )
}

export default App
