import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HowStarted from './components/HowStarted'
import LoveNotes from './components/LoveNotes'
import OurStory from './components/OurStory'
import PhotoGallery from './components/PhotoGallery'
import BucketList from './components/BucketList'
import LoveGame from './components/LoveGame'
import LoveChallenge from './components/LoveChallenge'
import RelationshipTrivia from './components/RelationshipTrivia'
import './App.css'

function App() {
  

  return (
    < div >
    <Navbar />
    <Banner />
    <HowStarted />
    <LoveNotes />
    <OurStory />
    <PhotoGallery />
    <BucketList />
    <LoveGame />
    <LoveChallenge />
    <RelationshipTrivia />
    </div>
  )
}

export default App
