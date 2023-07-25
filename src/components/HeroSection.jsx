import { FaShareSquare } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="hero-col-2">
            <ul>
                <li href="#home">Home -</li>
                <li href="#meme-maker"> - Meme Maker</li>
            </ul>
            <h1>MEME GENERATOR</h1>
            <h4>Make memes from images and videos in just a few clicks</h4>
            <button className="hero-section-button"><FaShareSquare/>Create a meme</button>
        </div>
        <div className="hero-col-1">
            <img className="hero-image" src="/images/img1.webp"/>
        </div>
    </div>
  )
}

export default HeroSection
